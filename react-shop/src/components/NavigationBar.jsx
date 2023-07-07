import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Fashion, Accessory, Digital } from '../pages';

function NavigationBar() {
  return (
    <div className="nav-bar">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1/*" element={<Fashion />} />
          <Route path="/page2/*" element={<Accessory />} />
          <Route path="/*" element={<Digital />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavigationBar;
