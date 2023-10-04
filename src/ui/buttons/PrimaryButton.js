import BaseButton from './BaseButton';
import styled from 'styled-components';

const PrimaryButton = styled(BaseButton)`
  background-color: #ffc700;
  color: #4a5568;
  padding: 0.7rem 1.5rem;

  &:hover {
    background-color: #ffaa00;
    color: #2d3748;
  }
`;

export default PrimaryButton;
