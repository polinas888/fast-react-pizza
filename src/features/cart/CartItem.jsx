/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import {
  StyledCartItem,
  CartItemText,
  CartItemPrice,
} from './styledComponents/StyledCartItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <StyledCartItem>
      <CartItemText>
        {quantity}&times; {name}
      </CartItemText>
      <div className="flex items-center justify-between sm:gap-6">
        <CartItemPrice>{formatCurrency(totalPrice)}</CartItemPrice>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
