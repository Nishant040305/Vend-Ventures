import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Mainpage from './components/mainpage';
import Product from './components/product';
function App() {
  return(
  <div className='App'>
      <Routes>
          <Route path="/dashboard" element = {<Mainpage></Mainpage>}></Route>
        <Route path="*" element={<Mainpage></Mainpage>}></Route>
        <Route path="/product/:productID" element = {<Product></Product>}></Route>
      </Routes>
      {/* <Mainpage></Mainpage> */}
  </div>
  );
}

export default App;
