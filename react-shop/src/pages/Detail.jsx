import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Rating from '@mui/material/Rating';

import Button from '../components/Button';

function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

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
  }, [id]);

  const handleAddToCart = () => {};

  const handleGoToCart = () => {
    navigate('/cart');
  };

  if (!product) {
    return null; // 데이터가 로드되지 않은 경우 null 반환하거나 로딩 스피너 등을 표시할 수 있음
  }

  return (
    <ThemeProvider theme={theme}>
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
            <CustomerRating>
              <StarRating
                name="read-only"
                value={product.rating.rate}
                readOnly
              />
              <RatingInfo>
                {product.rating.rate} / {product.rating.count} 참여
              </RatingInfo>
            </CustomerRating>
            <Price>${Math.ceil(product.price)}</Price>
            <Button
              role={'장바구니에 담기'}
              onClick={handleAddToCart}
              bgColor={'#570df8'}
              color={'#fff'}
            />
            <Button
              role={'장바구니로 이동'}
              onClick={handleGoToCart}
              bgColor={'#fff'}
              color={'#1F2937'}
            />
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
  color: ${({ theme }) => theme.lightColor.input};
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

const CustomerRating = styled.div`
  display: flex;
  margin-top: 12px;
`;

const StarRating = styled(Rating)`
  width: 120px;
  height: 24px;
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
