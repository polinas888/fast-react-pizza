import styled from 'styled-components';

export const StyledOrderItem = styled.li`
  padding: 0.7rem 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.8rem;
`;

export const Quantity = styled.span`
  font-weight: bold;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
`;

export const Ingredients = styled.p`
  font-size: 0.8rem;
  text-transform: capitalize;
  font-style: italic;
  color: #787878;
`;
