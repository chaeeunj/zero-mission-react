import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Rating from '@mui/material/Rating';

import NavigationBar from '../components/NavigationBar';
// import StarRating from '../components/StarRating';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setProduct(jsonData.find((data) => data.id === parseInt(id)));
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
          패션 <StyledSpan>&gt;</StyledSpan> {product.title}
        </MenuNav>
        <DetailWrapper key={product.id} id={product.id}>
          <ProductImg src={product.image} alt="productImg"></ProductImg>
          <ProductDescBox>
            <Title>{product.title}</Title>
            <NewBadge>NEW</NewBadge>
            <Desc>{product.description}</Desc>
            <div>
              <Rating
                name="read-only"
                value={Math.floor(product.rating.rate * 2) / 2}
                readOnly
              />
              <RatingInfo>
                {product.rating.rate} / {product.rating.count} 참여
              </RatingInfo>
            </div>
            <Price>${Math.ceil(product.price)}</Price>
          </ProductDescBox>
        </DetailWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

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

const DetailWrapper = styled.div`
  display: flex;
  margin-top: 56px;
  justify-content: center;
`;

const ProductImg = styled.img`
  width: 200px;
  height: 270px;
  padding: 16px;
`;

const ProductDescBox = styled.div`
  width: 1024px;
  height: 316px;
  padding: 32px 48px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  display: inline-block;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const NewBadge = styled.span`
  margin-left: 15px;
  width: 32px;
  height: 19px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.lightColor.badge};
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 14px;
  font-weight: 600;
  padding: 0 9px 0 9px;
`;

const Desc = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const RatingInfo = styled.div`
  margin-left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const Price = styled.div`
  margin: 8px 0 16px 0;
  font-size: 30px;
  color: ${({ theme }) => theme.lightColor.commonText};
`;
