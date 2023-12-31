import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.text};
        margin: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};  line-height: 1.5;
    }
`

export default GlobalStyles;
