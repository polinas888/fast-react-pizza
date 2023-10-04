/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';
import {
  Quantity,
  Ingredients,
  ItemContainer,
  StyledOrderItem,
  TotalPrice,
} from './styledComponents/StyledOrderItem';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <StyledOrderItem>
      <ItemContainer>
        <p>
          <Quantity>{quantity}&times;</Quantity> {name}
        </p>
        <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
      </ItemContainer>
      <Ingredients>
        {isLoadingIngredients ? 'Loading...' : (ingredients || []).join(', ')}
      </Ingredients>
    </StyledOrderItem>
  );
}

export default OrderItem;
