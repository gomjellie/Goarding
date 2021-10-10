import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      black: string;
    };
    fonts: {
      normal: string;
    };
  }
}
