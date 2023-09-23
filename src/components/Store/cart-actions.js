import { cartItemAction } from "./cartItemReducer";
import { cartAction } from "./cartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://shopping-cart-f5573-default-rtdb.firebaseio.com/cartItem.json"
      );

      if (!response.ok) {
        throw new Error("Failed to ftech data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartItemAction.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      }));
    } catch (error) {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error",
          message: "Fetchin cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cartItem) => {
  return async (dispatch) => {
    dispatch(
      cartAction.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://shopping-cart-f5573-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartItem.cartItems,
            totalQuantity: cartItem.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        cartAction.showNotification({
          status: "success",
          title: "Success",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartAction.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
