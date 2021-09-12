import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s linear;
    }

    .btn-primery{
        background: ${({ theme }) => theme.primery};
        color: ${({ theme }) => theme.bg}
    }
`;

export const darkTheme = {
  bg: "#121212",
  text: "#fff",
  primery: "red",
};

export const lightTheme = {
  bg: "#fff",
  text: "121212",
  primery: "green",
};
