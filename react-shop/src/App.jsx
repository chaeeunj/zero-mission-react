import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Accessory from './pages/Accessory';
import Digital from './pages/Digital';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <div style={{ height: '100vh' }}>
      <Router>
        <NavigationBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route
            path="/fashion"
            element={<Fashion data={data} setData={setData} />}
          />
          <Route
            path="/accessory"
            element={<Accessory data={data} setData={setData} />}
          />
          <Route
            path="/digital"
            element={<Digital data={data} setData={setData} />}
          />
          <Route
            path="/product/:id"
            element={<Product cart={cart} setCart={setCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
