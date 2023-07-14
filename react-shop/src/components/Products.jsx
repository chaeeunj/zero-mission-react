import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function Products({ item }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <ProductWrapper>
          {item && (
            <AllProducts>
              <ProductLink
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
            </AllProducts>
          )}
        </ProductWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

Products.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Products;

const Wrapper = styled.div`
  position: relative;
  top: 85px;
  width: 100vw;
  margin-left: 75px;
`;

const ProductWrapper = styled.div`
  /* width: 100vw; */
  margin-top: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AllProducts = styled.div`
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
