import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: #191919;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin: 0 10px;
`;
export const ButtonHome = styled(RectButton)``;
export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;
export const ContainerCart = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: #7159c1;
  border-radius: 4px;
  height: 30px;
  padding: 5px;
`;
export const ButtonCart = styled(RectButton)``;
export const Circle = styled.View`
  /* border-radius: 50px;
  padding: 5px;

  margin-left: 18px; */
`;
export const ItensCart = styled.Text`
  padding: 0px;
  margin: 5px;
  color: #fff;
  font-size: 15px;
`;
