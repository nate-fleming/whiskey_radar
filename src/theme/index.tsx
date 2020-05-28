import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const mainTheme = {
  breakpoints: {
    small: "786px",
    medium: "1024px",
    large: "1280px",
  },

  borders: {
    borderRadius: "3px",
    buttonBorderRadius: "5px",
    headerHeight: "60px",
    tabsHeight: "40px",
  },

  colors: {
    text: "#333",
    background: "#fff",
    primary: "#2a7dc3",
    secondary: "#1e669f",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    background: #ececec;
    margin: 0;
    color: "#333";
    box-sizing: border-box;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }
`;

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Theme;
