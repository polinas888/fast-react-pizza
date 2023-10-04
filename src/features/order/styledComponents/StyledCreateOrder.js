import styled from 'styled-components';

export const PositionButtonContainer = styled.span`
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;

  @media (max-width: 768px) {
    right: 5px;
    top: auto;
    bottom: 3px;
    transform: none;
  }
`;

export const PriorityContainer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriorityCheckbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ffd700;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PriorityLabel = styled.label`
  font-weight: 500;
  font-size: 1rem;
`;
