import styled from 'styled-components';

function SearchBar() {
  return (
    <div>
      <StyledInput type="text" placeholder="검색" />
    </div>
  );
}

export default SearchBar;

const StyledInput = styled.input`
  width: 230px;
  height: 45px;
  background-color: ${({ theme }) => theme.lightColor.input};
  border: none;
  border-radius: 5px;
  margin-left: 20px;
`;
