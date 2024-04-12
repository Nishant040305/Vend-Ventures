// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './components/mainpage';
import Product from './components/product';
import Form from './components/productForm/postAdd';
import MobilePost from './components/productForm/mobilePost';
import Error from './components/error404';
import CarPost from './components/productForm/carPost';
import RealState from './components/productForm/realState';
import Electronics from './components/productForm/electorics';
import MotorCycle from './components/productForm/motorCycle';
import Cart from './components/cart';
import Chats from './components/Chats'
import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { Events } from "./components/Events";
import { MyForm } from './components/MyForm';

// const DEBUG = true;

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    function onMessage(value) {
      setEvents(previous => [...previous, `[${value.user}] ${value.message.content}`]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('message', onMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('message', onMessage);
    };
  }, []);

  return(
  <div className='App'>
      <ConnectionState isConnected={ isConnected } />
      <Events events={ events } />
      <ConnectionManager />
      <MyForm />
      <Routes>
      <Route path="/product/:productID" element = {<Product></Product>}></Route>

          <Route path="/:_" element = {<Mainpage></Mainpage>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/Chats" element={<Chats></Chats>}></Route>

        <Route path="/" element = {<Mainpage></Mainpage>}></Route>

        <Route path="/post/mobile" element={<MobilePost></MobilePost>}></Route>
        <Route path="/error" element={<Error></Error>}></Route>
        <Route path="/post/car" element={<CarPost></CarPost>}></Route>
        <Route path="post/realstate" element = {<RealState></RealState>}></Route>
        <Route path = "post/electronics" element = {<Electronics></Electronics>}></Route>
        <Route path="post/motorcycle" element={<MotorCycle></MotorCycle>}></Route>
        <Route path="post" element={<Form></Form>}/>
        <Route path="*" element={<Mainpage></Mainpage>}></Route>

      </Routes>
      {/* <Mainpage></Mainpage> */}
  </div>
  );
}

export default App;
