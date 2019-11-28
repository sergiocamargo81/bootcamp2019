import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Wrapper, Container, Logo, BasketContainer, ItemCount} from './styles';

export default function Header({navigation, cartSize}) {
  return (
    <Wrapper>
      <Container>
        <Logo onPress={() => navigation.navigate('Home')} />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={30} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
