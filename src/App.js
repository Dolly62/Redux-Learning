import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./components/Store/cart-actions";

let isInitial = true;

function App() {
  const isShown = useSelector(state => state.cart.isShown);
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if(cartItem.changed){
      dispatch(sendCartData(cartItem));
    }
  }, [cartItem, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
