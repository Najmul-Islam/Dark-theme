import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.bg};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s linear;
    }

    .btn-primery{
        background: ${({ theme }) => theme.primery};
        color: ${({ theme }) => theme.bg};
        border:none;
      outline: none;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 500;
    }
`;

export const darkTheme = {
  bg: "#121212",
  text: "#fff",
  primery: "white",
};

export const lightTheme = {
  bg: "#fff",
  text: "121212",
  primery: "black",
};
