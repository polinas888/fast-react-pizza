import styled from 'styled-components';
import BaseButton from './BaseButton';

const SecondaryButton = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid #4a5568;
  color: #4a5568;
  padding: 0.6rem 1.2rem;
  background-color: #ffc700;

  &:hover {
    background-color: #4a5568;
    color: #ffc700;
  }
`;

export default SecondaryButton;
