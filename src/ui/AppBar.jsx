import SearchOrder from '../features/order/SearchOrder';
import User from '../features/user/User';
import styled from 'styled-components';
import BrandLink from './BrandLink';

const StyledAppBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  background-color: #ffc700;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 640px) {
    padding: 1.5rem 3rem;
  }
`;

function AppBar() {
  return (
    <StyledAppBar>
      <BrandLink to={'/'}>Fast react pizza Co.</BrandLink>
      <SearchOrder />
      <User />
    </StyledAppBar>
  );
}

export default AppBar;
