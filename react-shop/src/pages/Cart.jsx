import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// import Button from '../components/Button';
import EmptyCart from '../components/cart/EmptyCart';
import FullCart from '../components/cart/FullCart';
import TotalPrice from '../components/cart/TotalPrice';

function Cart({ cart, setCart }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MenuNav>
          홈 <StyledSpan>&gt;</StyledSpan> 장바구니
        </MenuNav>
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          cart.map((cart) => {
            return <FullCart key={cart.id} cart={cart} />;
          })
        )}

        {cart.length === 0 ? '' : <TotalPrice />}
      </Wrapper>
    </ThemeProvider>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default Cart;

const Wrapper = styled.div`
  position: relative;
  top: 85px;
  width: fit-content;
  margin-left: 75px;
  padding: 20px 8px 32px 8px;
`;

const MenuNav = styled.div`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 14px;
  padding: 8px 0 8px 0;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.lightColor.input};
`;
