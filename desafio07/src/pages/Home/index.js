import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';

export default function Home() {
  return (
    <Container>
      <Text style={{color: '#FFF'}}>Home</Text>
    </Container>
  );
}

Home.navigationOptions = {
  title: 'test',
};
