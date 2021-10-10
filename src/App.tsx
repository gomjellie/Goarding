/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import styled from 'styled-components/native';

interface IContainerProps {
  background: string;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.background ? props.background : 'white'};
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

const App: FC = () => {
  return (
    <Container background="white">
      <MainText>Hello World</MainText>
    </Container>
  );
};

export default App;
