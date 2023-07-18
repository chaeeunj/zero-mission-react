import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Button from '../Button';

function TotalPrice() {
  const handleOpenModal = () => {
    alert('장바구니의 모든 상품들이 삭제됩니다.');
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AllPrice>총 : $400</AllPrice>
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

export default TotalPrice;

const Wrapper = styled.div`
  position: relative;
  bottom: 600px;
  left: 1100px;
  margin: 40px 0 80px 0;
`;

const AllPrice = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.lightColor.commonText};
  margin-right: 20px;
`;
