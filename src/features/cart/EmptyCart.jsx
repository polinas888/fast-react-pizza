import {
  StyledEmptyCart,
  EmptyCartMessage,
} from './styledComponents/StyledEmptyCart';
import BackButton from '../../ui/buttons/BackButton';

function EmptyCart() {
  return (
    <StyledEmptyCart>
      <BackButton to="/menu">&larr; Back to menu</BackButton>
      <EmptyCartMessage>
        Your cart is still empty. Start adding some pizzas :)
      </EmptyCartMessage>
    </StyledEmptyCart>
  );
}

export default EmptyCart;
