import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  background: ${colors.primary};
  color: #fff;
  border-radius: 9px;
  min-width: 18px;
  min-height: 18px;
  font-size: 12px;
  padding: 2px;
  text-align: center;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
`;
