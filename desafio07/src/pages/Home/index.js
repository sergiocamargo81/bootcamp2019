import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {formatPrice} from '../../util/format';

import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

class Home extends Component {
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
  }

  handleAddProduct = id => {};

  renderProduct = ({item}) => {
    // console.tron.log(item);

    return (
      <Product key={item.id}>
        <ProductImage source={{uri: item.image}} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.priceFormatted}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Adicionar ao carrinho</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const {products} = this.state;

    return (
      <Container>
        <FlatList
          vertical
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'test',
};

export default Home;
