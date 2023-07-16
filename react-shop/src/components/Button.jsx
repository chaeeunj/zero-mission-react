import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import PropTypes from 'prop-types';

function Button({ role, onClick, bgColor, color }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton onClick={onClick} bgColor={bgColor} color={color}>
        {role}
      </StyledButton>
    </ThemeProvider>
  );
}

Button.propTypes = {
  role: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;

const StyledButton = styled.button`
  height: 48px;
  padding: 0 16px;
  font-size: 14px;
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  cursor: pointer;
  margin-right: 10px;
`;
