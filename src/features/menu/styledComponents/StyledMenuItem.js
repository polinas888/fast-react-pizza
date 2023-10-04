import styled from 'styled-components';

export const StyledMenuItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
`;

export const PizzaImage = styled.img`
  height: 6rem;
  ${({ soldOut }) => soldOut && 'opacity: 0.7; filter: grayscale(1);'}
`;

export const PizzaInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-top: 0rem;
`;

export const PizzaName = styled.p`
  font-weight: bold;
`;

export const Ingredients = styled.p`
  max-width: 18rem;
  font-size: 0.8rem;
  text-transform: capitalize;
  font-style: italic;
  color: #4a5568;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PizzaPrice = styled.p`
  font-size: 0.8rem;
`;

export const SoldOutText = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  color: #4a5568;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

export const QuantityContainerPizzaNotSoldOut = styled.div`
  margin-right: 0.5rem;
`;
