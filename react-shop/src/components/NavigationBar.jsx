import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import SearchBar from './SearchBar';
import Cart from '../pages/Cart';

function NavigationBar() {
  return (
    <div className="nav-bar">
      <BrowserRouter>
        <Link to="/">React Shop</Link>
        <Link to="/fashion">Fashion</Link>
        <Link to="/accessory">Accessory</Link>
        <Link to="/digital">Digital</Link>
        <Routes>
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
      </BrowserRouter>
      <img src="/sun.png" alt="light" />
      <SearchBar />
      <BrowserRouter>
        <Link to="/cart">
          <img src="/cart.png" alt="cart" />
        </Link>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavigationBar;
