import { getTotalPizzasPrice, getTotalPizzasQuantity } from './CartSlice';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import {
  StyledCartOverview,
  CartOverviewInfo,
  LinkToCart,
} from './styledComponents/StyledCartOverview';

function CartOverview() {
  const totalQuantity = useSelector(getTotalPizzasQuantity);
  const totalPrice = useSelector(getTotalPizzasPrice);

  if (totalQuantity === 0) return null;
  return (
    <StyledCartOverview>
      <CartOverviewInfo>
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </CartOverviewInfo>
      <LinkToCart to="/cart">Open cart &rarr;</LinkToCart>
    </StyledCartOverview>
  );
}

export default CartOverview;
