import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import PropTypes from 'prop-types';

function MenuNav({ menu }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Menu>
          홈 <StyledSpan>&gt;</StyledSpan> {menu}
        </Menu>
        <Title>{menu}</Title>
      </Wrapper>
    </ThemeProvider>
  );
}

MenuNav.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default MenuNav;

const Wrapper = styled.div`
  position: relative;
  top: 120px;
`;

const Menu = styled.div`
  color: ${({ theme }) => theme.lightColor.navText};
  font-size: 14px;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.lightColor.commonText};
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.lightColor.commonText};
`;
