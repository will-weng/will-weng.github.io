import { createGlobalStyle } from "styled-components";

/*** The new CSS Reset - version 1.2.0 (last updated 23.7.2021) ***/
const GlobalStyles = createGlobalStyle`
    /* Preferred box-sizing value */
    * {
        box-sizing: border-box;
        margin: 0;
        background-color: ${({ theme }) => theme.colours.FireEngineRed};
        color: ${({ theme }) => theme.colours.OrangeWheel};
        font-family: ${({ theme }) => theme.font.text};
    }
    
    /*
        Remove list styles (bullets/numbers)
        in case you use it with normalize.css
      */
    ol,
    ul {
        list-style: none;
    }
    
    /* For images to not be able to exceed their container */
    img {
        max-width: 100%;
    }
    
    /* Removes spacing between cells in tables */
    table {
        border-collapse: collapse;
    }
    
    /* Revert the 'white-space' property for textarea elements on Safari */
    textarea {
        white-space: revert;
    }

    p {
        line-height: 1.25;
    }
    h1 {
        margin: 10px 0px 10px 0px;
    }
`

export default GlobalStyles;
