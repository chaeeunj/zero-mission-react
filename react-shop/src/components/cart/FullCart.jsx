import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Button from '../Button';

function FullCart({ cart, handleQuantity }) {
  console.log(cart);
  const { id, image, title, price, quantity } = cart;

  return (
    <ThemeProvider theme={theme}>
      <CartProduct>
        <ProductWrapper>
          <ProductInfo>
            <ImgLink to={`/product/${id}`}>
              <ProductImg src={image}></ProductImg>
            </ImgLink>
            <ProductCard>
              <TitleLink to={`/product/${id}`}>{title}</TitleLink>
              <Price>${price * quantity}</Price>
              <ProductCount>
                <Button
                  role={'-'}
                  onClick={() => handleQuantity('minus', id, quantity - 1)}
                  bgColor={'#570df8'}
                  color={'#fff'}
                />
                <Count>{quantity}</Count>
                <Button
                  role={'+'}
                  onClick={() => handleQuantity('plus', id, quantity + 1)}
                  bgColor={'#570df8'}
                  color={'#fff'}
                />
              </ProductCount>
            </ProductCard>
          </ProductInfo>
        </ProductWrapper>
      </CartProduct>
    </ThemeProvider>
  );
}

FullCart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleQuantity: PropTypes.func.isRequired,
};

export default FullCart;

const CartProduct = styled.div`
  margin-top: 56px;
`;

const ProductWrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
`;

const ProductInfo = styled.div`
  margin-top: 16px;
  display: flex;
`;

const ImgLink = styled(Link)`
  text-decoration: none;
  width: 224px;
  height: 224px;
`;

const ProductImg = styled.img`
  width: 192px;
  height: 192px;
  padding: 16px;
`;
const ProductCard = styled.div`
  padding: 32px 48px;
`;

const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const Price = styled.div`
  margin: 8px 0 16px 0;
  font-size: 30px;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const ProductCount = styled.div``;

const Count = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.lightColor.commonText};
  background-color: ${({ theme }) => theme.lightColor.navBack};
  padding: 0 16px 0 9px;
  margin-left: 0;
`;
