
import './App.css';
import Navbar from './Comonents/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Comonents/Footer/Footer';
import men_banner from './Comonents/Assets/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './Comonents/Assets/Assets/Frontend_Assets/banner_women.png';
import kid_banner from './Comonents/Assets/Assets/Frontend_Assets/banner_kids.png';
function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>
      <Routes>
        {/* inserting shop page */}
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
