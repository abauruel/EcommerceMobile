import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from 'react-native';

export const Wrapper = styled.SafeAreaView.attrs({})`
  background: #191919;
`;
export const Container = styled.View`
  height: 100%;
`;
export const List = styled.FlatList``;
export const ContainerItem = styled.View``;
export const ContainerItemInfo = styled.View`
  margin: 5px 10px 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PictureItem = styled.Image`
  height: 80px;
  width: 80px;
  align-self: center;
  margin: 0px 10px;
`;
export const ContainerTextsInfo = styled.View`
  width: 200px;
`;
export const TextTitleItem = styled.Text``;
export const TextPriceItem = styled.Text`
  margin: 5px 0;
  font-weight: bold;
`;
export const IconDelete = styled(Icon)`
  margin: 0 10px;
`;

export const ContainerCart = styled.View`
  margin: 0 20px;
  border-radius: 4px;
  background: #fff;
  max-height: ${Dimensions.get('window').height - 140};
`;

export const ContainerAmountSubtotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 2px 20px 20px;
  background: #eee;
  padding: 10px;
  border-radius: 4px;
`;
export const ContainerAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconRemove = styled(Icon)`
  margin: 0 5px;
`;
export const IconAdd = styled(Icon)`
  margin: 0 5px;
`;
export const ContainerTextAmount = styled.View`
  background: #fff;
  padding: 0 20px;
  border-radius: 4px;
`;
export const ButtonFinishOrder = styled(RectButton)`
  background: #7159c1;
  align-items: center;
  padding: 10px 40px;
  border-radius: 4px;
  margin: 10px;
`;

export const TextFinishOrder = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ContainerTotalPrice = styled.View`
  align-items: center;
`;
export const TextTotalContainerTotalPrice = styled.Text`
  font-size: 16px;
  color: #999;
  text-transform: uppercase;
`;
export const TextTPriceContainerTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonAmount = styled(RectButton)``;
export const ButtonRemove = styled(RectButton)``;
