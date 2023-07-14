import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import NavigationBar from '../components/NavigationBar';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Wrapper>
        {data.map(
          (item) =>
            item.id === `${id}` && (
              <MenuNav key={item.id} item={item.id}>
                홈 <StyledSpan>&gt;</StyledSpan> {item.title}
              </MenuNav>
            )
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

Product.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default Product;

const Wrapper = styled.div`
  position: relative;
  top: 85px;
  width: 100vw;
  margin-left: 75px;
`;

const MenuNav = styled.div`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 14px;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.lightColor.commonText};
`;
