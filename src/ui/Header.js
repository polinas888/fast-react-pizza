import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

export const StyledHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SubHeader = styled.span`
  color: #ffc700;
`;
