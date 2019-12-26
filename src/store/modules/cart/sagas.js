import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';
import {addCartSuccess, updateCartSuccess} from './action';
import {formatPrice} from '../../../util/format';

function* addToCart({id}) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;
  if (amount > stockAmount) {
    Alert.alert(
      'Alerta de estoque',
      'Estoque insuficiente para a quantidade desejada'
    );
  }

  if (productExists) {
    yield put(updateCartSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formatedPrice: formatPrice(response.data.price),
    };
    yield put(addCartSuccess(data));
  }
}
function* updateCart({id, amount}) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert(
      'Alerta de estoque',
      'Estoque insuficiente para a quantidade desejada'
    );
    return;
  }

  yield put(updateCartSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_REQUEST', updateCart),
]);
