import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import Products from '../components/Products';
import MenuNav from '../components/MenuNav';
import Footer from '../components/Footer';

function Fashion({ data, setData }) {
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

  // const WomenClothing = data.filter(
  //   (item) => item.category === "women's clothing"
  // );

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <MenuNav menu={'패션'} />
      {data.map((item) => {
        return item.category === "men's clothing" ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
      {data.map((item) => {
        return item.category === "women's clothing" ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
      <Footer />
    </ThemeProvider>
  );
}

Fashion.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Fashion;

const ProductWrapper = styled.div`
  /* width: 100vw; */
  margin-top: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemImg = styled.img`
  padding: 90px;
  width: 112px;
  height: 160px;
`;

const DescWrapper = styled.div`
  height: 160px;
  background-color: ${({ theme }) => theme.lightColor.itemDescBack};
  border-radius: 0 0 10px 10px;
`;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 16px;
  padding: 35px 35px 0 35px;
`;

const ItemPrice = styled.div`
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 16px;
  font-weight: 500;
  padding: 20px 35px 0 35px;
`;
