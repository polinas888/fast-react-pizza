import Error from '../../ui/Error';
import MenuItem from './MenuItem';
import MenuList from './styledComponents/MenuList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMenu } from '../../services/apiRestaurant';
import { catchError, menuLoad, startLoading } from './MenuSlice';
import Loader from '../../ui/Loader';

function Menu() {
  const menu = useSelector((state) => state.menu.pizzasList);
  const error = useSelector((state) => state.menu.error);
  const loading = useSelector((state) => state.menu.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMenu() {
      try {
        dispatch(startLoading());
        const loadedMenu = await getMenu();
        dispatch(menuLoad(loadedMenu));
      } catch (error) {
        dispatch(catchError(error));
      }
    }
    loadMenu();
  }, [dispatch]);

  return (
    <>
      {error && <Error />}
      {loading && <Loader />}
      <MenuList>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </MenuList>
    </>
  );
}

export default Menu;
