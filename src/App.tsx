import React, {FC} from 'react';
import {useColorScheme} from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native';
import {DarkTheme, LightTheme} from './Theme';

interface IContainerProps {
  theme?: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.background};
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainText>Hello World</MainText>
      </Container>
    </ThemeProvider>
  );
};

export default App;
