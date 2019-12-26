import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Container,
  Wrapper,
  List,
  Item,
  PhotItem,
  DescriptionItem,
  CartButton,
  TextPrice,
  TextButton,
  ItensCart,
  ContainerCart,
} from './styles';

import {formatPrice} from '../../util/format';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/action';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get(`/products`);
    const data = response.data.map(product => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAddCart = item => {
    const {addCartRequest} = this.props;
    addCartRequest(item.id);
    const {navigation} = this.props;
    navigation.navigate('Cart');
  };

  render() {
    const {cartSize, amount} = this.props;
    const {products} = this.state;
    return (
      <Wrapper>
        <Container>
          <List
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Item>
                <PhotItem
                  source={{
                    uri: item.image,
                  }}
                />
                <DescriptionItem>{item.title}</DescriptionItem>
                <TextPrice>{item.priceFormated}</TextPrice>
                <CartButton onPress={() => this.handleAddCart(item)}>
                  <ContainerCart>
                    <Icon name="shopping-cart" size={21} color="#FFF" />
                    <ItensCart>{amount[item.id] || 0}</ItensCart>
                  </ContainerCart>

                  <TextButton>Adicionar </TextButton>
                </CartButton>
              </Item>
            )}
          />
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
