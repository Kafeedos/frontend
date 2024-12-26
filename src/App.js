import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Components/pages/Shop';
import { ShopCategory } from './Components/pages/ShopCategory';
import { Product } from './Components/pages/Product';
import { Cart } from './Components/pages/Cart';
import { LoginSignup } from './Components/pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
function App() {
  return (
    <div >
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
