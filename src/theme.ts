import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  borderRadius: "5px",
  
    animation: {
      transitionDuration: "500ms",
    },
    effects: {
      elevationShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      onPrimary: "#ffffff",
      onSecondary: "#000000",
      background: "#ffffff",
      secondaryBackground: "#000000",
      altBackground: "#e9e9e9",
      altSecondaryBackground: "#484848",
      tint: "#00000098",
      text: "#000000",
      textSecondary: "#ffffff",
      dangerBackgroud:"rgb(153, 39, 39)",
      dangerText: "rgb(242, 76, 76)",
      successBackgroud: "rgb(29, 201, 29)",
      successText: "rgb(31, 169, 31)"
    },
    fontType: {
      primary: '"Roboto Regular", Georgia, Serif',
      secondary: '"Montserrat Regular", Georgia, Serif'
    }
};

export { Theme };