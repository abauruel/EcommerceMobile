import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: #191919;
`;
export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 10px;
`;
export const ButtonHome = styled(RectButton)``;
export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const ContainerCart = styled.View``;
export const ButtonCart = styled(RectButton)``;
export const Circle = styled.View`
  background: #7159c1;
  border-radius: 50px;
  padding: 5px;
  margin-top: -35px;
  margin-left: 18px;
`;
export const ItensCart = styled.Text`
  color: #fff;
  font-size: 12px;
`;
