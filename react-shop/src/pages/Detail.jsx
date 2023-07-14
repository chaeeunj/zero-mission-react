import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import NavigationBar from '../components/NavigationBar';
import PropTypes from 'prop-types';

function Detail() {
  const [data, setData] = useState([]);

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
        <MenuNav>
          홈 <StyledSpan>&gt;</StyledSpan>
        </MenuNav>
        {data.map(
          (item) =>
            item.id === { productid } && (
              <>
                <img
                  key={item.id}
                  id={item.id}
                  src={item.image}
                  alt="product"></img>
                <div>
                  <h1>{item.title}</h1>
                  <div>{item.description}</div>
                  <div>
                    {item.rating.rate} / {item.rating.count} 참여
                  </div>
                  <div>${item.price}</div>
                </div>
              </>
            )
        )}
      </Wrapper>
    </ThemeProvider>
  );
}

// Detail.propTypes = {
//   productid: PropTypes.number.isRequired,
// };

export default Detail;

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
