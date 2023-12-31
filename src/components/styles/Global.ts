import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.colours.text};
        margin: 0;
    }

    body {
        background-color: ${({ theme }) => theme.colours.body};  line-height: 1;
    }
`

export default GlobalStyles;
