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
function App() {
  return (
    <div >
      <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
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
