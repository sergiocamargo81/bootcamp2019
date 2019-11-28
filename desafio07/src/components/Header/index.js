import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity} from 'react-native';

import {Wrapper, Container, Logo, BasketContainer, ItemCount} from './styles';

export default function Header({navigation, cartSize}) {
  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={30} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
