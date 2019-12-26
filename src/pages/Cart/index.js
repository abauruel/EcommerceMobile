import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/action';

import {
  Wrapper,
  Container,
  List,
  ContainerCart,
  ButtonFinishOrder,
  TextFinishOrder,
  ContainerTotalPrice,
  TextTotalContainerTotalPrice,
  TextTPriceContainerTotalPrice,
  ContainerItem,
  ContainerItemInfo,
  PictureItem,
  ContainerTextsInfo,
  TextTitleItem,
  TextPriceItem,
  IconDelete,
  ContainerAmountSubtotal,
  ContainerAmount,
  IconRemove,
  IconAdd,
  ContainerTextAmount,
  ButtonAmount,
  ButtonRemove,
} from './styles';

class Cart extends Component {
  handleIncremment = product => {
    const {updateCartRequest} = this.props;
    updateCartRequest(product.id, product.amount + 1);
  };

  handleDecrement = product => {
    const {updateCartRequest} = this.props;

    updateCartRequest(product.id, product.amount - 1);
  };

  render() {
    const {products, total, deleteToCart} = this.props;

    return (
      <Wrapper>
        <Container>
          <ContainerCart>
            <List
              data={products}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <ContainerItem>
                  <ContainerItemInfo>
                    <PictureItem source={{uri: item.image}} />
                    <ContainerTextsInfo>
                      <TextTitleItem>{item.title}</TextTitleItem>
                      <TextPriceItem>{item.formatedPrice}</TextPriceItem>
                    </ContainerTextsInfo>
                    <ButtonRemove onPress={() => deleteToCart(item.id)}>
                      <IconDelete name="delete" size={21} color="#7159c1" />
                    </ButtonRemove>
                  </ContainerItemInfo>
                  <ContainerAmountSubtotal>
                    <ContainerAmount>
                      <IconRemove
                        onPress={() => this.handleDecrement(item)}
                        name="remove-circle-outline"
                        size={16}
                        color="#7159c1"
                      />
                      <ContainerTextAmount>
                        <Text>{item.amount}</Text>
                      </ContainerTextAmount>
                      <ButtonAmount onPress={() => this.handleIncremment(item)}>
                        <IconAdd
                          name="add-circle-outline"
                          size={16}
                          color="#7159c1"
                        />
                      </ButtonAmount>
                    </ContainerAmount>
                    <View>
                      <Text>{item.subtotal}</Text>
                    </View>
                  </ContainerAmountSubtotal>
                </ContainerItem>
              )}
            />

            <ContainerTotalPrice>
              <TextTotalContainerTotalPrice>Total</TextTotalContainerTotalPrice>
              <TextTPriceContainerTotalPrice>
                {total}
              </TextTPriceContainerTotalPrice>
            </ContainerTotalPrice>

            <ButtonFinishOrder>
              <TextFinishOrder>FINALIZAR PEDIDO</TextFinishOrder>
            </ButtonFinishOrder>
          </ContainerCart>
        </Container>
      </Wrapper>
    );
  }
}
const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
