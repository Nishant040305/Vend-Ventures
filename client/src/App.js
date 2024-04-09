import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Mainpage from './components/mainpage';
import Product from './components/product';
import Form from './components/productForm/postAdd';
import MobilePost from './components/productForm/mobilePost';
import Error from './components/error404';
import CarPost from './components/productForm/carPost';
import RealState from './components/productForm/realState';
import Electronics from './components/productForm/electorics';
import MotorCycle from './components/productForm/motorCycle';

function App() {
  return(
  <div className='App'>
      <Routes>
          <Route path="/dashboard" element = {<Mainpage></Mainpage>}></Route>
        <Route path="/product/:productID" element = {<Product></Product>}></Route>
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
