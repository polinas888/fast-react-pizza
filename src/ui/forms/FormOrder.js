import styled from 'styled-components';

export const FormTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const FormLabel = styled.label`
  @media (min-width: 640px) {
    flex-basis: 40%;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  border-radius: 9999px;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  transition: all 0.3s;
  color: #787878;
  outline: none;
  box-shadow: 0 0 0 3px #ffeb3b;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: ${(props) => (props.position ? 'relative' : '')};

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;
