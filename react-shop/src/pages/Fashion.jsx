import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

import NavigationBar from '../components/NavigationBar';

function Fashion() {
  const [data, setData] = useState([]);
  const pagemenu = '패션';

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

  const WomenClothing = data.filter(
    (item) => item.category === "women's clothing"
  );

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Wrapper>
        <MenuNav>
          홈 <StyledSpan>&gt;</StyledSpan> {pagemenu}
        </MenuNav>
        <ProductWrapper>
          <Title>{pagemenu}</Title>
          <Products>
            {data.map(
              (item) =>
                item.category === "men's clothing" && (
                  <ProductLink
                    key={item.id}
                    id={item.id}
                    style={{ textDecoration: 'none' }}
                    to={`/product/${item.id}`}>
                    <ImgWrapper>
                      <ItemImg src={item.image}></ItemImg>
                    </ImgWrapper>
                    <DescWrapper>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>${item.price}</ItemPrice>
                    </DescWrapper>
                  </ProductLink>
                )
            )}
          </Products>
          {Array.from(Array(Math.ceil(WomenClothing.length / 4)), (e, i) => {
            const start = i * 4;
            const end = start + 4;
            const items = WomenClothing.slice(start, end);
            return (
              <Products key={i}>
                {items.map((item) => (
                  <ProductLink
                    key={item.id}
                    id={item.id}
                    style={{ textDecoration: 'none' }}
                    to={`/product/${item.id}`}>
                    <ImgWrapper>
                      <ItemImg src={item.image}></ItemImg>
                    </ImgWrapper>
                    <DescWrapper>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>${item.price}</ItemPrice>
                    </DescWrapper>
                  </ProductLink>
                ))}
              </Products>
            );
          })}
        </ProductWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Fashion;

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

const ProductWrapper = styled.div`
  /* width: 100vw; */
  margin-top: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const Products = styled.div`
  position: relative;
  display: flex;
  float: left;
  margin-top: 20px;
  /* width: 1330px; */
`;

const ProductLink = styled(Link)`
  width: 315px;
  height: 480px;
  border: 1px solid ${({ theme }) => theme.lightColor.input};
  border-radius: 10px;
  margin-right: 20px;
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
