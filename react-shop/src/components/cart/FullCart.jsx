import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Button from '../Button';

function FullCart({ cart }) {
  console.log(cart);
  const [count, setCount] = useState(1);

  const handleChangeCount = (operator) => {
    if (count >= 1) {
      if (operator === 'plus') {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CartProduct>
        <ProductWrapper>
          <ProductInfo>
            <ImgLink to={`/product/`}>
              <ProductImg src={''}></ProductImg>
            </ImgLink>
            <ProductCard>
              <TitleLink to={`/product/`}>T-shirt</TitleLink>
              <Price>$400</Price>
              <ProductCount>
                <Button
                  role={'-'}
                  onClick={() => handleChangeCount('minus')}
                  bgColor={'#570df8'}
                  color={'#fff'}
                />
                <Button
                  role={count}
                  onClick={() => handleChangeCount('')}
                  bgColor={theme.lightColor.navBack}
                  color={theme.lightColor.commonText}
                />
                <Button
                  role={'+'}
                  onClick={() => handleChangeCount('plus')}
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
  /* width: 192px;
  height: 192px; */
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
