import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../pages/Home';
import Fashion from '../pages/Fashion';
import Accessory from '../pages/Accessory';
import Digital from '../pages/Digital';
import SearchBar from './SearchBar';
import Cart from '../pages/Cart';

function NavigationBar() {
  return (
    <NavBar>
      <NavMenu>
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

        <SunImg src="/sun.png" alt="light" />
        <SearchBar />
        <CartWrapper>
          <CartLink style={{ textDecoration: 'none' }} to="/cart">
            <img src="/cart.png" alt="cart" />
          </CartLink>
          <CartCount>0</CartCount>
        </CartWrapper>
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
  align-items: center;
  padding-top: 8px;
`;

const ShopLink = styled(Link)`
  color: #404343;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 90px;
`;

const MenuLink = styled(Link)`
  color: #404343;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    background-color: #d7d7d7;
    width: 70px;
    height: 35px;
    border-radius: 10px;
  }
`;

const SunImg = styled.img`
  color: #404343;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 700px;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const CartLink = styled(Link)`
  color: #404343;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 20px;
`;

const CartCount = styled.span`
  position: absolute;
  left: 33px;
  top: -10px;
  display: inline-block;
  width: 22px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;
