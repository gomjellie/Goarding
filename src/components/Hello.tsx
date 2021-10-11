import React, {FC} from 'react';
import {Button} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import {RootStackParamList} from '../@types/Root';

type HelloProps = NativeStackScreenProps<RootStackParamList, 'Hello'>;

const Hello: FC<HelloProps> = ({navigation}) => {
  return (
    <HelloContainer>
      <Button title="Pop" onPress={() => navigation.pop()}></Button>
    </HelloContainer>
  );
};

const HelloContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default Hello;
