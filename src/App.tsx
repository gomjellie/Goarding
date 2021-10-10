import React, {FC} from 'react';
import styled, {ThemeProvider} from 'styled-components/native';
import Theme from './Theme';

interface IContainerProps {
  theme?: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;

const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

const App: FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Hello World</MainText>
      </Container>
    </ThemeProvider>
  );
};

export default App;
