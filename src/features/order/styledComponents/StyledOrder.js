import styled from 'styled-components';

export const StyledOrder = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem 1rem;
  background-color: #f4f4f4;
  border-radius: 0.5rem;
`;

export const OrderStatusContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const OrderStatusTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const StatusLabel = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;

export const OrderBadge = styled.div`
  border-radius: 9999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
  color: #fff;
  background-color: ${(props) => props.backgroundcolor};
`;

export const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const DeliveryText = styled.p`
  font-weight: 500;
  font-size: 1rem;
`;

export const TimeInfo = styled.p`
  font-size: 0.8rem;
  color: #787878;
`;

export const OrderItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const OrderPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: ${(props) => (props.type === 'unit' ? 500 : 800)};
`;
