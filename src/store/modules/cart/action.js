export function addCartRequest(id) {
  return {
    type: '@cart/ADD_CART_REQUEST',
    id,
  };
}
export function addCartSuccess(product) {
  return {
    type: '@cart/ADD_CART_SUCCESS',
    product,
  };
}

export function updateCartRequest(id, amount) {
  return {
    type: '@cart/UPDATE_REQUEST',
    id,
    amount,
  };
}

export function updateCartSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_SUCCESS',
    id,
    amount,
  };
}

export function deleteToCart(id) {
  return {
    type: '@cart/REMOVE_CART',
    id,
  };
}
