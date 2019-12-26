import produce from 'immer';

export default function Cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_CART_SUCCESS':
      return produce(state, draft => {
        const {product} = action;
        draft.push(product);
      });

    case '@cart/UPDATE_SUCCESS':
      return produce(state, draft => {
        if (action.amount <= 0) {
          return state;
        }
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });

    case '@cart/REMOVE_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
