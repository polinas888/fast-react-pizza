import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenu } from '../services/apiRestaurant';
import { catchError, menuLoad } from '../features/menu/MenuSlice';

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

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMenu() {
      try {
        const loadedMenu = await getMenu();
        dispatch(menuLoad(loadedMenu));
      } catch (error) {
        dispatch(catchError(error));
      }
    }
    loadMenu();
  }, [dispatch]);

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
