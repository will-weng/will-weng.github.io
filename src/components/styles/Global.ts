import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        color: ${({ theme }) => theme.colours.Xanthous};
        font-family: ${({ theme }) => theme.font.text};
    }
    body {
        background-color: ${({ theme }) => theme.colours.PrussianBlue};  line-height: 1;
    }
`

export default GlobalStyles;
