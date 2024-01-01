import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        background-color: ${({ theme }) => theme.colours.Vanilla};
        color: ${({ theme }) => theme.colours.Xanthous};
        font-family: ${({ theme }) => theme.font.text};
    }
`

export default GlobalStyles;
