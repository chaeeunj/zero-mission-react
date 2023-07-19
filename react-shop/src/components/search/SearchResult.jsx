import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

function SearchResult({ results, onItemClick }) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {results.map((result, id) => {
          return (
            <List key={id} onClick={() => onItemClick(result.id)}>
              {result.title}
            </List>
          );
        })}
      </Wrapper>
    </ThemeProvider>
  );
}

SearchResult.propTypes = {
  results: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default SearchResult;

const Wrapper = styled.div`
  position: relative;
  width: 210px;
  right: 30px;
  padding: 0 16px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.lightColor.input};
  box-shadow: 0 0 8px ${({ theme }) => theme.lightColor.input};
  z-index: 12;
`;

const List = styled.div`
  width: 100%;
  padding: 12px 16px;
  color: ${({ theme }) => theme.lightColor.navText};
  cursor: pointer;
`;
