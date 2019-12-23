import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
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
} from './styles';

export default class Cart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    const {products} = this.state;
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
                      <TextPriceItem>{item.price}</TextPriceItem>
                    </ContainerTextsInfo>
                    <IconDelete name="delete" size={21} color="#7159c1" />
                  </ContainerItemInfo>
                  <ContainerAmountSubtotal>
                    <ContainerAmount>
                      <IconRemove
                        name="remove-circle-outline"
                        size={16}
                        color="#7159c1"
                      />
                      <ContainerTextAmount>
                        <Text>3</Text>
                      </ContainerTextAmount>
                      <IconAdd
                        name="add-circle-outline"
                        size={16}
                        color="#7159c1"
                      />
                    </ContainerAmount>
                    <View>
                      <Text>R$ 123,00</Text>
                    </View>
                  </ContainerAmountSubtotal>
                </ContainerItem>
              )}
            />

            <ContainerTotalPrice>
              <TextTotalContainerTotalPrice>Total</TextTotalContainerTotalPrice>
              <TextTPriceContainerTotalPrice>
                R$ 161,00
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
