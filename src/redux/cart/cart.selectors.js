// There are two types of selectors - input and output.
// Input doesn't use createSelector while output does use input and createSelector

import { createSelector } from "reselect";

// an input selector
const selectCart = state => state.cart;

// an output selector which is memoized
export const selectCartItems = createSelector(
  [selectCart], // first arg is an array of input selectors
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (totalItems, cartItem) => totalItems + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (totalItems, cartItem) => totalItems + cartItem.quantity * cartItem.price,
    0
  )
);
