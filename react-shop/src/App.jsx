import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Accessory from './pages/Accessory';
import Digital from './pages/Digital';
import Cart from './pages/Cart';
import Product from './pages/Detail';

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
