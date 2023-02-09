import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Poppins', sans-serif;
    }
    body, html {
        background: #0D0D0D;
        height: 100%;
    }
`
export default GlobalStyle;