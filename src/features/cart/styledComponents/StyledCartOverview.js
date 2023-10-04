import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledCartOverview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #29160e;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #cbd5e0;

  @media (min-width: 640px) {
    padding: 1rem 3rem;
    font-size: 1rem;
  }
`;

export const CartOverviewInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

export const LinkToCart = styled(Link)`
  color: #cbd5e0;

  &:hover {
    text-decoration: underline;
  }
`;
