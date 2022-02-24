import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    animation: {
      transitionDuration: string;
    };
    effects: {
      elevationShadow: string;
    };
    colors: {
      primary: string;
      secondary: string;
      onPrimary: string;
      onSecondary: string;
      background: string;
      secondaryBackground: string;
      altBackground: string;
      altSecondaryBackground: string;
      tint: string;
      text: string;
      textSecondary: string;
      dangerBackgroud: string;
      dangerText: string;
      successBackgroud: string;
      successText: string;
    };

    fontType: {
      primary: string;
      secondary: string;
    };
  }
}
