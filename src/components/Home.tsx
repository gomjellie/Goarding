import React, {FC} from 'react';
import {Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {RootStackParamList} from '../@types/Root';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home: FC<HomeProps> = ({navigation}) => {
  return (
    <HomeContainer>
      <Button
        title="Go to Hello"
        onPress={() => navigation.navigate('Hello')}></Button>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Home;
