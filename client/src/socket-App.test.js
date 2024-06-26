// // import logo from './logo.svg';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Mainpage from './components/mainpage';
// import Product from './components/product';
// import Form from './components/productForm/postAdd';
// import MobilePost from './components/productForm/mobilePost';
// import Error from './components/error404';
// import CarPost from './components/productForm/carPost';
// import RealState from './components/productForm/realState';
// import Electronics from './components/productForm/electorics';
// import MotorCycle from './components/productForm/motorCycle';

// import Cart from './components/cart';
// import Chats from './components/chat'


// import React, { useState, useEffect } from 'react';
// import { socket } from './socket';
// import { ConnectionState } from './components/socketTest/ConnectionState';
// import { ConnectionManager } from './components/socketTest/ConnectionManager';
// import { Events } from "./components/socketTest/Events";
// import { MyForm } from './components/socketTest/MyForm';

// function App() {
//   // SOCKET.IO TEST
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     function onConnect() {
//       setIsConnected(true);
//     }
//     function onDisconnect() {
//       setIsConnected(false);
//     }
//     function onMessage(value) {
//       setEvents(previous => [...previous, `[${value.user}] ${value.message.content}`]);
//     }

//     socket.on('connect', onConnect);
//     socket.on('disconnect', onDisconnect);
//     socket.on('message', onMessage);

//     return () => {
//       socket.off('connect', onConnect);
//       socket.off('disconnect', onDisconnect);
//       socket.off('message', onMessage);
//     };
//   }, []);

//   return(
//   <div className='App'>

//       {/* SOCKET.IO DEBUG */}
//       <ConnectionState isConnected={ isConnected } />
//       <Events events={ events } />
//       <ConnectionManager />
//       <MyForm />

//       <Routes>
//           <Route path="/:_" element = {<Mainpage></Mainpage>}></Route>
//           <Route path="/cart" element={<Cart></Cart>}></Route>
//           <Route path="/chat/:chatId" element={<Chats></Chats>}></Route>

//         <Route path="/" element = {<Mainpage></Mainpage>}></Route>

//         <Route path="/product/:productID" element = {<Product></Product>}></Route>
//         <Route path="/post/mobile" element={<MobilePost></MobilePost>}></Route>
//         <Route path="/error" element={<Error></Error>}></Route>
//         <Route path="/post/car" element={<CarPost></CarPost>}></Route>
//         <Route path="post/realstate" element = {<RealState></RealState>}></Route>
//         <Route path="post/electronics" element = {<Electronics></Electronics>}></Route>
//         <Route path="post/motorcycle" element={<MotorCycle></MotorCycle>}></Route>
//         <Route path="post" element={<Form></Form>}/>
//         <Route path="*" element={<Mainpage></Mainpage>}></Route>

//       </Routes>
//       {/* <Mainpage></Mainpage> */}
//   </div>
//   );
// }

// export default App;
