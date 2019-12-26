export function addCart(product) {
  return {
    type: '@cart/ADD_CART',
    product,
  };
}

export function updateCart(id, amount) {
  return {
    type: '@cart/UPDATE',
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
