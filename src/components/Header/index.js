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
} from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <ContainerCart>
          <Icons name="add-shopping-cart" size={28} color="#FFF" />
          <Circle>
            <ItensCart>10</ItensCart>
          </Circle>
        </ContainerCart>
      </Container>
    </Wrapper>
  );
}
