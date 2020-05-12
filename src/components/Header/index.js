import React from 'react';
import {connect} from 'react-redux';

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

function Header({navigation, cartSize}) {
  return (
    <Wrapper>
      <Container>
        <ButtonHome onPress={() => navigation.navigate('Home')}>
          <Logo />
        </ButtonHome>
        <ContainerCart>
          <ButtonCart onPress={() => navigation.navigate('Cart')}>
            <Icons name="add-shopping-cart" size={24} color="#FFF" />
          </ButtonCart>
          <Circle>
            <ItensCart>{cartSize}</ItensCart>
          </Circle>
        </ContainerCart>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
