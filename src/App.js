import React from "react";
import Content from "./components/Content";
import { Toggle } from "./components/Toggle";
import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "./components/styles/useTheme";
import {
  GlobalStyle,
  darkTheme,
  lightTheme,
} from "./components/styles/globalStyle";

const Container = styled.div`
  max-width: 60%;
  margin: 5rem auto 0;
`;

function App() {
  const [theme, toggleTheme] = useTheme();

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
