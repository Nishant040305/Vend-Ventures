require("dotenv").config();
const connectToMongo = require("../models/mongodb");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const clientID ="258725350727-cjpj2bljdsfq9299avd3qh67hd36r8pr.apps.googleusercontent.com"
const clientSecreat="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";

const userdb = require("../models/userSchema");
const productdb = require("../models/productSchema");

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
    successRedirect:"http://localhost:3000/dashboard",
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

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){
            return next(err)
        }
        res.redirect("http://localhost:3000/");
    })
})
app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`)
})

require("./routes/productinfo.js")(app);