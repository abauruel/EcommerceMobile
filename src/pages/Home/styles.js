import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import {darken} from 'polished';

export const Wrapper = styled.SafeAreaView.attrs({})`
  background: #191920;
`;

export const Container = styled.View`
  height: 100%;
`;
export const List = styled.FlatList.attrs({
  horizontal: true,
})``;
export const Item = styled.View`
  padding: 20px;
  margin: 10px 20px;
  border-radius: 4px;
  background: #fff;
  width: ${Dimensions.get('window').width - 40};
  max-width: ${Dimensions.get('window').width - 40};
  max-height: 358px;
`;
export const PhotItem = styled.Image`
  width: 200px;
  height: 200px;
  align-self: center;
`;
export const DescriptionItem = styled.Text.attrs({
  numberOfLines: 1,
})`
  line-height: 20px;
  overflow: hidden;
  font-size: 16px;
  padding: 5px 0px;
  margin-top: auto;
`;
export const TextPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  padding: 5px 0px;
  margin-top: auto;
`;

export const CartButton = styled(RectButton)`
  flex-direction: row;

  background: #7159c1;
  border-radius: 8px;
  margin-top: 5px;
`;
export const ContainerCart = styled.View`
  flex-direction: row;
  background: ${darken(0.03, '#7159c1')};
  padding: 20px;
  border-radius: 8px;
`;

export const ItensCart = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const TextButton = styled.Text`
  flex: 1;
  text-align: center;

  color: #fff;
  font-size: 21px;
  text-transform: uppercase;
  margin: 0 5px;

  padding: 20px;
`;
