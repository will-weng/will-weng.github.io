import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: ${({ theme }) => theme.colours.OrangeWheel};
        margin: 0;
        font-family: ${({ theme }) => theme.font.text};
    }

    body {
        background-color: ${({ theme }) => theme.colours.PrussianBlue};  line-height: 1;
    }
`

export default GlobalStyles;
