import React from 'react';
import {View, Text} from 'react-native';

import {Container} from './styles';

import api from '../../services/api';
import {formatPrice} from '../../util/format';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});

    console.tron.log(this.state);
  }

  render() {
    return (
      <Container>
        <Text style={{color: '#FFF'}}>Home</Text>
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'test',
};

export default Home;
