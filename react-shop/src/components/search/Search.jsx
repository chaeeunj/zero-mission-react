import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

function Search({ data, setData }) {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SearchBar data={data} setData={setData} setResults={setResults} />
        <SearchResult results={results} onItemClick={handleItemClick} />
      </Wrapper>
    </ThemeProvider>
  );
}

Search.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Search;

const Wrapper = styled.div`
  margin-left: 20px;
`;
