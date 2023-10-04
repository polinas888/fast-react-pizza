import { useDispatch } from 'react-redux';
import Button from './buttons/Button';
import { deleteItem } from '../features/cart/CartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button variant="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
