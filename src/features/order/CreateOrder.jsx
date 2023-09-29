import { useState } from 'react';
import { Form, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store';
import { clearCart, getTotalPizzasPrice } from '../cart/CartSlice';
import { fetchAddress } from '../user/userSlice';
import {
  PositionButtonContainer,
  PriorityCheckbox,
  PriorityContainer,
  PriorityLabel,
} from './styledComponents/StyledCreateOrder';
import InputError from '../../ui/forms/InputError';
import {
  FormInput,
  FormLabel,
  FormTitle,
  InputContainer,
} from '../../ui/forms/FormOrder';
import { useNavigate } from 'react-router-dom';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.pizzas);
  const totalPizzasPrice = useSelector(getTotalPizzasPrice);
  const {
    userName,
    status,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const totalPrice = withPriority ? totalPizzasPrice * 1.2 : totalPizzasPrice;
  const isLoadingAddress = status === 'loading';

  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === 'submitting';
  const dispatch = useDispatch();
  const errors = {};
  //Need logic to handle wrong input

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!isValidPhone(data.phone)) {
      errors.phoneError =
        'Please give us your phone number. We may need to contact you';
    }

    if (!isValidPhone(data.phone)) {
      errors.phoneError =
        'Please give us your phone number. We may need to contact you';
    }

    if (Object.keys(errors).length > 0) {
      return errors;
    }

    const newOrder = {
      customer: data.customer,
      phone: data.phone,
      address: data.address,
      priority: data.priority === 'true',
      cart: JSON.parse(data.cart),
    };

    try {
      const createdOrder = await createOrder(newOrder);
      store.dispatch(clearCart());
      navigate(`/order/${createdOrder.id}`);
    } catch (error) {
      //Need logic to handle Error on UI
      console.log('Failed to create order. Please try again later.');
    }
  };

  return (
    <div className="px-4 py-6">
      <FormTitle>Ready to order? Let's go!</FormTitle>
      <Form method="POST" onSubmit={handleSubmit}>
        <InputContainer>
          <FormLabel>First Name</FormLabel>
          <FormInput
            type="text"
            name="customer"
            required
            defaultValue={userName}
          />
        </InputContainer>

        <InputContainer>
          <FormLabel>Phone number</FormLabel>
          <FormInput
            type="tel"
            name="phone"
            required
            placeholder="put at lease 5 numbers"
          />
          {errors?.phone && <InputError>{errors.phone}</InputError>}
        </InputContainer>

        <InputContainer position="true">
          <FormLabel>Address</FormLabel>
          <FormInput
            type="text"
            name="address"
            disabled={isLoadingAddress}
            defaultValue={address}
            required
          />
          {!position.latitude && !position.longitute && (
            <PositionButtonContainer>
              <Button
                variant="small"
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </PositionButtonContainer>
          )}
        </InputContainer>
        {status === 'error' && <InputError>{errorAddress}</InputError>}

        <PriorityContainer>
          <PriorityCheckbox
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <PriorityLabel htmlFor="priority">
            Want to yo give your order priority?
          </PriorityLabel>
        </PriorityContainer>

        <input
          type="hidden"
          name="position"
          value={
            position.latitude && position.longitute
              ? `${position.latitude}, ${position.longitute}`
              : ''
          }
        />

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="submit" disabled={isSubmitting} variant="primary">
            {isSubmitting || isLoadingAddress
              ? 'Placing order....'
              : `Order now for $${totalPrice.toFixed(2)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
