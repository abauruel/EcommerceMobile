import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

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

  handleAddCart = () => {
    const {navigation} = this.props;
    navigation.navigate('Cart');
  };

  render() {
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
                <CartButton onPress={() => this.handleAddCart(item.id)}>
                  <ContainerCart>
                    <Icon name="shopping-cart" size={21} color="#FFF" />
                    <ItensCart>10</ItensCart>
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

export default Home;
