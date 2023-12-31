import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/buttons/Button';
import { increaseItemQuantity, decreaseItemQuantity } from './CartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector((state) => {
    const pizza = state.cart.pizzas.find((pizza) => pizza.pizzaId === pizzaId);
    return pizza ? pizza.quantity : 0;
  });

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="round"
        onClick={() => dispatch(increaseItemQuantity({ pizzaId }))}
      >
        +
      </Button>
      <p>{pizzaQuantity}</p>
      <Button
        variant="round"
        onClick={() => dispatch(decreaseItemQuantity({ pizzaId }))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
