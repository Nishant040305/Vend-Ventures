require("dotenv").config();
const connectToMongo = require("../models/mongodb");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;
const SPORT = process.env.SPORT || 4000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const clientID ="258725350727-cjpj2bljdsfq9299avd3qh67hd36r8pr.apps.googleusercontent.com"
const clientSecreat="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";
const userdb = require("../models/userSchema");
const productdb = require("../models/productSchema");
const chatdb = require("../models/chatSchema")
function generateOtp() {
    // Generate a 6 digit random number
    let otp = crypto.randomInt(100000, 999999);
    return otp;
}
async function sendEmail(userEmail, otp) {
    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nm.20233205@gmail.com',
            pass: 'iaga pdtl ofyw jyjv'
        }
    });

    // Email options
    

    let mailOptions = {
      from: 'nm.20233205@gmail.com',
      to: userEmail,
      subject: 'Welcome to vendVentures',
      text: ` 
Dear User,

Thank you for signing up for Shiksha! We're excited to have you on board.

To get started, please verify your email address by enter this OTP:
${otp}

Once your email is verified, you can start exploring all the features and benefits we offer.

If you have any questions or need assistance, feel free to contact our support team.

Thank you for choosing us!

Best regards,
vendVentures

      `
  };
  
    // Send email
     transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("failed"+otp)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));

app.use(express.json());
app.use(session({
    secret:"afdsakl2425435fjsnworijsngoirjiotji",
    resave:false,
    saveUninitialized:true
}))
app.use('/public', express.static(path.join(__dirname, 'public')));

//setuppassport

app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new OAuth2Strategy({
        clientID:clientID,
        clientSecret:clientSecreat,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await userdb.findOne({userId:profile.id});
            if(!user){
                user = new userdb({
                    userId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value

                });
                await user.save();
            }
            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
)
)
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})

//initialize google oauth
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))
app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/",
    failureRedirect:"http://localhost:3000/login"}
))

app.get("/login/sucess",async(req,res)=>{
    if(req.user){
        res.status(200).json({message:"User Login",user:req.user})
        // //console.log(req.user)
    }
    else{
        res.status(200).json({message:"Not Authorized"})
    }
})
app.post("/loginEmail",async(req,res)=>{
    try{
        let var_ = generateOtp();
        sendEmail(req.body.email,var_)
        res.status(200).json({otp:var_});
    }
    catch(error){
        res.status(400).json({message:"email not send"})
    }
    
})
app.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        res.redirect("http://localhost:3000/");
    })
})
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`)
})



// product
require("./routes/productinfo.js")(app);

// socketio
require("./routes/chat.js")(app);
const { Server } = require('socket.io');
const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});

io.on('connection', (socket) => {
    // console.log("DEBUG:", process.env.DEBUG)
    console.log('User connected');

    socket.on('connect', () => {
        console.log('User connected');
    });

    socket.on('message', async (data) => {
        console.log('Message received:', data); // data = {channel, user, message = {type, content}}

        let channel;
        try {
            channel = await chatdb.findOneAndUpdate(
                { 
                    _id: data.channel 
                },
                {  
                    $push: { messages: { user: data.user, message: data.message } } 
                },
            );
            // console.log('Chat document:', channel);
        } catch (error) {
            console.error('Error finding or creating chat document:', error);
        }

        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

io.listen(SPORT);
io.httpServer.on('listening', function () {
    console.log('Chat server listening on PORT', io.httpServer.address().port);
});