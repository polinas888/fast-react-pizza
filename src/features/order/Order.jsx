// Test ID: IIDSAT

import { getOrder, updateOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { useFetcher } from 'react-router-dom';
import OrderItem from './OrderItem';
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
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Error from '../../ui/Error';
import { useSelector } from 'react-redux';
import Loader from '../../ui/Loader';

function Order() {
  const fetcher = useFetcher();
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const menu = useSelector((state) => state.menu.pizzasList);

  useEffect(() => {
    async function loadOrder() {
      try {
        const order = await getOrder(orderId);
        setOrder(order);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
    loadOrder();
  }, [orderId]);

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

  const handleChangePriority = async () => {
    const priorityUpdate = { priority: true };
    setLoading(true);
    try {
      await updateOrder(orderId, priorityUpdate);
      setOrder({ ...order, priority: true });
      setLoading(false);
    } catch (error) {
      setError('Failed updating priority');
    }
  };

  return (
    <>
      {loading && <Loader />}
      {order.id && (
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
            {
              <TimeInfo>
                (Estimated delivery: {formatDate(estimatedDelivery)})
              </TimeInfo>
            }
          </DeliveryInfo>
          <OrderItems>
            {cart.map((item) => (
              <OrderItem
                item={item}
                key={item.pizzaId}
                ingredients={
                  menu.find((el) => el.id === item.pizzaId)?.ingredients
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
          {!priority && <UpdateOrder onClick={handleChangePriority} />}
        </StyledOrder>
      )}
      {error && <Error />}
    </>
  );
}

export default Order;
