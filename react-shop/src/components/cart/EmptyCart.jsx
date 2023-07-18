import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import Button from '../Button';

function EmptyCart() {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Info>
        <Text>장바구니에 물품이 없습니다.</Text>
        <Button
          role={'담으러 가기'}
          onClick={handleGoToHome}
          bgColor={'#570df8'}
          color={'#fff'}
        />
      </Info>
    </ThemeProvider>
  );
}

export default EmptyCart;

const Wrapper = styled.div`
  position: relative;
  top: 85px;
  width: fit-content;
  margin-left: 75px;
  padding: 20px 8px 32px 8px;
`;

const Info = styled.div`
  margin-top: 56px;
`;

const Text = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.lightColor.commonText};
`;
