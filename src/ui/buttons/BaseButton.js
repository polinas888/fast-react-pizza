import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: 9999px;
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
  outline: none;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default BaseButton;
