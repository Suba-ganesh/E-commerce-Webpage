import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Product from './pages/product';
import Cart from './pages/cart';
import Loginsignup from './pages/loginsignup';
import Footer from './components/footer/footer';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
