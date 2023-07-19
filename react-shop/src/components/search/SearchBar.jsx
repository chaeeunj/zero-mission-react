import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

function SearchBar({ data, setData, setResults }) {
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchData(input);
  }, []);

  const fetchData = async (value) => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setData(jsonData);

      const results = data.filter((item) => {
        return (
          value &&
          item &&
          item.title &&
          item.title.toLowerCase().includes(value)
        );
      });

      setResults(results);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <SearchWrapper>
        <StyledInput
          type="text"
          placeholder="검색"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </SearchWrapper>
    </ThemeProvider>
  );
}

SearchBar.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default SearchBar;

const SearchWrapper = styled.div`
  width: 210px;
  height: 45px;
  border-radius: 5px;
  padding: 0 16px;
  /* margin-left: 20px; */
  background-color: ${({ theme }) => theme.lightColor.input};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.lightColor.navText};
  background-color: transparent;
`;
