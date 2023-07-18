import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Button from '../Button';

function TotalPrice({ cart, totalPrice, setTotalPrice }) {
  const handleOpenModal = () => {
    alert('장바구니의 모든 상품들이 삭제됩니다.');
  };

  // 상품의 총 가격 계산하기
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // TotalPrice 컴포넌트가 마운트되거나 cart 값이 변경될 때마다 총 가격을 업데이트
  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  }, [cart]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AllPrice>총 : ${totalPrice}</AllPrice>
        <Button
          role={'구매하기'}
          onClick={handleOpenModal}
          bgColor={'#570df8'}
          color={'#fff'}
        />
      </Wrapper>
    </ThemeProvider>
  );
}

TotalPrice.propTypes = {
  cart: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
};

export default TotalPrice;

const Wrapper = styled.div`
  position: relative;
  /* bottom: 600px; */
  left: 1100px;
  margin: 40px 0 80px 0;
`;

const AllPrice = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.lightColor.commonText};
  margin-right: 20px;
`;
