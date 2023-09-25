// Test ID: IIDSAT

import { getOrder, updateOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';
import {
  OrderStatusContainer,
  StyledOrder,
  OrderStatusTitle,
  StatusLabel,
  OrderBadge,
  DeliveryInfo,
  DeliveryText,
  TimeInfo,
  OrderItems,
  OrderPriceContainer,
  Price,
} from './styledComponents/StyledOrder';

function Order() {
  const { order } = useLoaderData();
  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <StyledOrder>
      <OrderStatusContainer>
        <OrderStatusTitle>Order #{id} status</OrderStatusTitle>
        <StatusLabel>
          {priority && (
            <OrderBadge backgroundcolor="#ff4842">Priority</OrderBadge>
          )}
          <OrderBadge backgroundcolor="#4caf50">{status} order</OrderBadge>
        </StatusLabel>
      </OrderStatusContainer>
      <DeliveryInfo>
        <DeliveryText>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </DeliveryText>
        <TimeInfo>
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </TimeInfo>
      </DeliveryInfo>
      <OrderItems>
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher.data?.find((el) => el.id === item.pizzaId)?.ingredients
            }
            isLoadingIngredients={fetcher.state === 'loading'}
          />
        ))}
      </OrderItems>
      <OrderPriceContainer>
        <Price type="unit">Price pizza: {formatCurrency(orderPrice)}</Price>
        {priority && (
          <Price type="unit">
            Price priority: {formatCurrency(priorityPrice)}
          </Price>
        )}
        <Price type="total">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </Price>
      </OrderPriceContainer>
      {!priority && <UpdateOrder />}
    </StyledOrder>
  );
}

export async function action({ request, params }) {
  const priority = { priority: true };
  await updateOrder(params.orderId, priority);
  return null;
}

export async function loader({ params }) {
  const { orderId } = params;
  const order = await getOrder(orderId);
  return { order };
}

export default Order;
