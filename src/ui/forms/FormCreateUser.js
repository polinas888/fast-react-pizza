import styled from 'styled-components';

export const FormCreateUser = styled.form`
  margin: 0 auto;
  text-align: center;
`;

export const FormCreateUserText = styled.p`
  margin-bottom: 1rem;
  color: #4a5568;
`;

export const InputCreateUser = styled.input`
  border-radius: 9999px;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: all 0.3s;
  margin-bottom: 2rem;
  width: 18rem;
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    outline: none;
    border-color: #ffc700;
    box-shadow: 0 0 0 2px #ffc700;
  }
  @media (min-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;
