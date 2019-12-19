import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  cartItems =>
    cartItems.reduce(
      (totalItems, cartItem) => totalItems + cartItem.quantity,
      0
    )
);
