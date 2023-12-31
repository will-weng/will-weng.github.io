import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.colors.text}
    }
    
    body {
        background-color: ${({ theme }) => theme.colors.body};
    }
`

export default GlobalStyles;
