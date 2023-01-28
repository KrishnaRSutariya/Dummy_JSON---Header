import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Catagory from './Catagory';
import Product from './Product';
import HomePage from './HomePage';
import Search from './Search';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/Catagory/:name' element={<Catagory/>}></Route>
        <Route path='/Catagory/:name/Product/:id' element={<Product/>}></Route>
        <Route path='/Product/:id' element={<Product/>}></Route>
        <Route path='/Search/:search' element={<Search/>}></Route>
      </Routes>

    </>
  );
}

export default App;
