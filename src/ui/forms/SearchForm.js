import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 4rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #ffffcc;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  transition: all 0.3s;

  &::placeholder {
    color: #ccc;
  }

  &:focus {
    outline: none;
    border-color: #ffc700;
    box-shadow: 0 0 0 2px #ffc700;
  }

  @media (min-width: 640px) {
    width: 16rem;
  }

  @media (min-width: 768px) {
    width: 18rem;
  }
`;
