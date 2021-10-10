import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      background: string;
    };
    fonts: {
      normal: string;
    };
  }
}
