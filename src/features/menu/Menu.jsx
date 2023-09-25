import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import MenuList from './styledComponents/MenuList';

function Menu() {
  const menu = useLoaderData();
  return (
    <MenuList>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </MenuList>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
