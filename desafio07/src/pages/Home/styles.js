import styled from 'styled-components/native';
import {darken} from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  padding: 30px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0 4px 0 10px;
`;

export const AddButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  flex: 1;
`;
