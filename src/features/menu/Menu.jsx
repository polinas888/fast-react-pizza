import Error from '../../ui/Error';
import MenuItem from './MenuItem';
import MenuList from './styledComponents/MenuList';
import { useSelector } from 'react-redux';

function Menu() {
  const menu = useSelector((state) => state.menu.pizzasList);
  const error = useSelector((state) => state.menu.error);

  return (
    <>
      {error && <Error />}
      <MenuList>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </MenuList>
    </>
  );
}

export default Menu;
