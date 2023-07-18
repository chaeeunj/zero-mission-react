import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function Products({ item }) {
  return (
    <ThemeProvider theme={theme}>
      {item && (
        <Wrapper>
          <AllProducts>
            <ProductLink
              style={{ textDecoration: 'none' }}
              to={`/product/${item.id}`}>
              <ImgWrapper>
                <ItemImg src={item.image}></ItemImg>
              </ImgWrapper>
              <DescWrapper>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>${Math.ceil(item.price)}</ItemPrice>
              </DescWrapper>
            </ProductLink>
          </AllProducts>
        </Wrapper>
      )}
    </ThemeProvider>
  );
}

Products.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Products;

const Wrapper = styled.div`
  width: 100vw;
  margin-left: 85px;
`;

const AllProducts = styled.div`
  position: relative;
  display: flex;
  float: left;
  margin-top: 20px;
`;

const ProductLink = styled(Link)`
  width: 315px;
  height: 490px;
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
  height: 106px;
  padding: 32px;
  background-color: ${({ theme }) => theme.lightColor.itemDescBack};
  border-radius: 0 0 10px 10px;
`;

const ItemTitle = styled.div`
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ItemPrice = styled.div`
  color: ${({ theme }) => theme.lightColor.commonText};
  font-size: 16px;
  font-weight: 500;
  /* margin-bottom: 20px; */
`;
