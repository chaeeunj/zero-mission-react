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
      <Wrapper>
        <MenuNav>
          홈 <StyledSpan>&gt;</StyledSpan> 장바구니
        </MenuNav>

        <Info>
          <Text>장바구니에 물품이 없습니다.</Text>
          <Button
            role={'담으러 가기'}
            onClick={handleGoToHome}
            bgColor={'#570df8'}
            color={'#fff'}
          />
        </Info>
      </Wrapper>
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

const MenuNav = styled.div`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 14px;
  padding: 8px 0 8px 0;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.lightColor.input};
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
