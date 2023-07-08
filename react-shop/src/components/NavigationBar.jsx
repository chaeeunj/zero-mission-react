import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import SearchBar from './SearchBar';
import Cart from '../pages/Cart';

function NavigationBar() {
  return (
    <NavBar>
      <NavMenu>
        <BrowserRouter>
          <ShopLink style={{ textDecoration: 'none' }} to="/">
            React Shop
          </ShopLink>
          <MenuLink style={{ textDecoration: 'none' }} to="/fashion">
            패션
          </MenuLink>
          <MenuLink style={{ textDecoration: 'none' }} to="/accessory">
            액세서리
          </MenuLink>
          <MenuLink style={{ textDecoration: 'none' }} to="/digital">
            디지털
          </MenuLink>
          <Routes>
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/digital" element={<Digital />} />
          </Routes>
        </BrowserRouter>
        <SunImg src="/sun.png" alt="light" />
        <SearchBar />
        <BrowserRouter>
          <CartLink style={{ textDecoration: 'none' }} to="/cart">
            <img src="/cart.png" alt="cart" />
          </CartLink>
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </NavMenu>
    </NavBar>
  );
}

export default NavigationBar;

const NavBar = styled.div`
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: skyblue;
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ShopLink = styled(Link)`
  color: #404343;
  font-size: 20px;
  font-weight: 700;
`;

const MenuLink = styled(Link)`
  color: #404343;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background-color: #d7d7d7;
  }
`;

const SunImg = styled.img`
  color: #404343;
  width: 24px;
  height: 24px;
`;

const CartLink = styled(Link)`
  color: #404343;
  width: 24px;
  height: 24px;
`;
