import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/Main/SignIn';
import SignUp from '~/pages/Main/SignUp';
import Product from '~/pages/Product';
import Type from '~/pages/Type';
import Size from '~/pages/Size';
import History from '~/pages/History';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
        Product,
        Type,
        Size,
        History,
        Cart,
        Order,
      },
      {
        initialRouteName: isLoggedIn ? 'Product' : 'SignIn',
      },
    ),
  );
}
