import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './buttons/Button';
import styled from 'styled-components';
import { HeaderContainer, StyledHeader, SubHeader } from './Header';

const StyledHome = styled.div`
  margin-top: 2rem;
  padding: 1rem 2rem;
  text-align: center;
`;

function Home() {
  const userName = useSelector((state) => state.user.name);

  return (
    <StyledHome>
      <HeaderContainer>
        <StyledHeader>
          The best pizza.
          <br />
          <SubHeader>Straight out of the oven, straight to you.</SubHeader>
        </StyledHeader>
      </HeaderContainer>
      {!userName ? (
        <CreateUser />
      ) : (
        <Button to="/menu" variant="primary">
          Continue ordering, {userName}
        </Button>
      )}
    </StyledHome>
  );
}

export default Home;
