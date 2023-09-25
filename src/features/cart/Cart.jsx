import Button from '../../ui/buttons/Button';
import BackButton from '../../ui/buttons/BackButton';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from './CartSlice';
import EmptyCart from './EmptyCart';
import {
  CartTitle,
  CartItemsList,
  CartButtonsContainer,
  StyledCart,
} from './styledComponents/StyledCart';

function Cart() {
  const userName = useSelector((state) => state.user.name);
  const cart = useSelector((state) => state.cart.pizzas);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <StyledCart>
      <BackButton to="/menu">&larr; Back to menu</BackButton>

      <CartTitle>Your cart, {userName}</CartTitle>

      <CartItemsList>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </CartItemsList>

      <CartButtonsContainer>
        <Button to="/order/new" variant="primary">
          Order pizzas
        </Button>

        <Button variant="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </CartButtonsContainer>
    </StyledCart>
  );
}

export default Cart;
