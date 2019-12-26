import produce from 'immer';
import {formatPrice} from '../../../util/format';

export default function Cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_CART':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1,
            formatedPrice: formatPrice(action.product.price),
          });
        }
      });

    case '@cart/UPDATE':
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
