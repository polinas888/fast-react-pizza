import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';
import Cart from './features/cart/Cart';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Menu from './features/menu/Menu';
import './index.css';
import CreateOrder from './features/order/CreateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        errorElement: <Error />,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
