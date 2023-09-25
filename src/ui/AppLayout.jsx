import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import AppBar from './AppBar';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 48rem;
`;

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <StyledAppLayout>
      {isLoading && <Loader />}
      <AppBar />
      <div>
        <Main>
          <Outlet />
        </Main>
      </div>
      <CartOverview />
    </StyledAppLayout>
  );
}

export default AppLayout;
