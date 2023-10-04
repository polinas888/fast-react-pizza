import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

import CartOverview from '../features/cart/CartOverview';
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
  return (
    <StyledAppLayout>
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
