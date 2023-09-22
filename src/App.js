import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { cartAction } from "./components/Store/cartReducer";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartAction.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        "https://shopping-cart-f5573-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItem),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
      const data = await response.json();
      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully!",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return;
    }
    sendCartData().catch((error) => {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
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
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
