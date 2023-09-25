import styled from 'styled-components';

export const StyledCartItem = styled.li`
  padding: 0.7rem 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CartItemText = styled.p`
  margin-bottom: 0.2rem;

  @media (min-width: 640px) {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

export const QuantityPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const CartItemPrice = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
`;
