import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import Carousel from '../components/Carousel';
import Products from '../components/Products';

function Home({ data, setData }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);

  const electronicsItems = data
    .filter((item) => item.category === 'electronics')
    .slice(0, 4);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Carousel />
        <FashionWrapper>
          <Title>패션</Title>
          {data.map((item) => {
            return item.category === "men's clothing" ? (
              <Products key={item.id} item={item} />
            ) : null;
          })}
        </FashionWrapper>
        <AccessoryWrapper>
          <Title>액세서리</Title>
          {data.map((item) => {
            return item.category === 'jewelery' ? (
              <Products key={item.id} item={item} />
            ) : null;
          })}
        </AccessoryWrapper>
        <DigitalWrapper>
          <Title>디지털</Title>
          {electronicsItems.map((item) => {
            return item && <Products key={item.id} item={item} />;
          })}
        </DigitalWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

Home.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Home;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const FashionWrapper = styled.div`
  margin-top: 50px;
`;

const AccessoryWrapper = styled.div`
  margin-top: 50px;
`;

const DigitalWrapper = styled.div`
  margin-top: 50px;
`;

const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.lightColor.commonText};
`;
