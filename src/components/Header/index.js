import React from 'react';
import {View, Image} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import {
  Wrapper,
  Container,
  Logo,
  ContainerCart,
  ItensCart,
  Circle,
  ButtonHome,
  ButtonCart,
} from './styles';

export default function Header({navigation}) {
  return (
    <Wrapper>
      <Container>
        <ButtonHome onPress={() => navigation.navigate('Home')}>
          <Logo />
        </ButtonHome>
        <ContainerCart>
          <ButtonCart onPress={() => navigation.navigate('Cart')}>
            <Icons name="add-shopping-cart" size={28} color="#FFF" />
          </ButtonCart>
          <Circle>
            <ItensCart>10</ItensCart>
          </Circle>
        </ContainerCart>
      </Container>
    </Wrapper>
  );
}
