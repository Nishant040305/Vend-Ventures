import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Mainpage from './components/mainpage';
import Product from './components/product';
import Form from './components/productForm/postAdd';
import MobilePost from './components/productForm/mobilePost';
import Error from './components/error404';
function App() {
  return(
  <div className='App'>
      <Routes>
          <Route path="/dashboard" element = {<Mainpage></Mainpage>}></Route>
        <Route path="*" element={<Mainpage></Mainpage>}></Route>
        <Route path="/product" element = {<Product></Product>}></Route>
        <Route path="/post/car" element={<MobilePost></MobilePost>}></Route>
        <Route path="/error" element={<Error></Error>}></Route>
      </Routes>
      {/* <Mainpage></Mainpage> */}
  </div>
  );
}

export default App;
