import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';
import Products from '../components/Products';
import MenuNav from '../components/MenuNav';

function Digital({ data, setData }) {
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

  // const electronics = data.filter((item) => item.category === 'electronics');

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <MenuNav menu={'디지털'} />
      {/* {Array.from(Array(Math.ceil(electronics.length / 4)), (e, i) => {
        const start = i * 4;
        const end = start + 4;
        const items = electronics.slice(start, end);
        return items.map((item) => <Products key={item.id} item={item} />);
      })} */}
      {data.map((item) => {
        return item.category === 'electronics' ? (
          <Products key={item.id} item={item} />
        ) : null;
      })}
    </ThemeProvider>
  );
}

Digital.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Digital;

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
  /* padding: 30px 35px 10px 30px; */
  padding: 35px 30px 10px 30px;
`;

const ItemPrice = styled.div`
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 16px;
  font-weight: 500;
  padding: 10px 10px 10px 30px;
`;
