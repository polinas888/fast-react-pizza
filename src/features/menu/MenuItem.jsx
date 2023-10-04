/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/buttons/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getPizzaQuantity } from '../cart/CartSlice';
import DeleteItem from '../../ui/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import {
  Ingredients,
  PizzaImage,
  PizzaInfoContainer,
  PizzaName,
  PizzaPrice,
  PriceContainer,
  QuantityContainer,
  QuantityContainerPizzaNotSoldOut,
  SoldOutText,
  StyledMenuItem,
} from './styledComponents/StyledMenuItem';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const pizzaQuantity = useSelector(getPizzaQuantity(id));

  return (
    <StyledMenuItem>
      <PizzaImage
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <PizzaInfoContainer>
        <PizzaName>{name}</PizzaName>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <PriceContainer>
          {!soldOut ? (
            <PizzaPrice>{formatCurrency(unitPrice)}</PizzaPrice>
          ) : (
            <SoldOutText>Sold out</SoldOutText>
          )}

          <QuantityContainer>
            <QuantityContainerPizzaNotSoldOut>
              {!soldOut && pizzaQuantity !== 0 && (
                <UpdateItemQuantity pizzaId={id} />
              )}
            </QuantityContainerPizzaNotSoldOut>
            {pizzaQuantity > 0 && <DeleteItem pizzaId={id} />}
            {!soldOut && pizzaQuantity === 0 && (
              <Button
                variant="small"
                onClick={() => {
                  dispatch(
                    addItem({
                      pizzaId: id,
                      name,
                      quantity: 1,
                      unitPrice,
                      totalPrice: unitPrice,
                    }),
                  );
                }}
              >
                Add to cart
              </Button>
            )}
          </QuantityContainer>
        </PriceContainer>
      </PizzaInfoContainer>
    </StyledMenuItem>
  );
}

export default MenuItem;
