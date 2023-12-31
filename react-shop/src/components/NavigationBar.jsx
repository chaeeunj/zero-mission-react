import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import Search from './search/Search';

function NavigationBar({ data, setData, cart }) {
  return (
    <ThemeProvider theme={theme}>
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
          <Search data={data} setData={setData} />
          <CartWrapper>
            <CartLink style={{ textDecoration: 'none' }} to="/cart">
              <img src="/cart.png" alt="cart" />
            </CartLink>
            {cart.length >= 1 ? (
              <CartCount>{cart.length}</CartCount>
            ) : (
              <CartCount>0</CartCount>
            )}
          </CartWrapper>
        </NavMenu>
      </NavBar>
    </ThemeProvider>
  );
}

NavigationBar.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
};

export default NavigationBar;

const NavBar = styled.div`
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.lightColor.navBack};
  box-shadow: 0 6px 10px -4px ${({ theme }) => theme.lightColor.input};
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
`;

const ShopLink = styled(Link)`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 90px;
`;

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin-left: 25px;

  &:hover {
    background-color: ${({ theme }) => theme.lightColor.navHover};
    padding: 8px 12px;
    border-radius: 10px;
    text-align: center;
  }
`;

const SunImg = styled.img`
  color: ${({ theme }) => theme.lightColor.navText};
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 700px;
`;

const CartWrapper = styled.div`
  position: relative;
`;

const CartLink = styled(Link)`
  color: ${({ theme }) => theme.lightColor.navText};
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
  background-color: #ef4444;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`;
