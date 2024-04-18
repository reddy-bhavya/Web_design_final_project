
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import Product from './Pages/Product';
import { Shop } from './Pages/Shop';
import Cart  from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png';
import banner_motors from './Components/Assets/banner_motors.jpg';
import banner_switchgear from './Components/Assets/banner_switchgear.jpg';
import banner_instruments from './Components/Assets/banner_instruments.jpg';
import PurchaseSummary from './Components/PurchaseSummary/PurchaseSummary';
import FailedTransaction from './Components/FailedTransaction/FailedTransaction';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/success' element={<PurchaseSummary/>}/>
        <Route path='/failed' element={<FailedTransaction/>}/>
        <Route path='/switchgears' element={<ShopCategory banner={banner_switchgear} category="switchgear"/>}/>
        <Route path='/motors' element={<ShopCategory banner={banner_motors} category="motor"/>}/>
        <Route path='/instruments' element={<ShopCategory banner={banner_instruments} category="instrument"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/contact" component={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
