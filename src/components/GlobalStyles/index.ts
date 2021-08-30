import {createGlobalStyle} from "styled-components";

// import {COLOR} from "./constants/colors/colors";
// import {BREAKPOINTS} from "./constants/breakpoints/breakpoints";

export const GlobalStyles = createGlobalStyle`
  html {
  
  /*
  * COLORS
  */
    --green: #22892D;
    --light_green: #1EA84E;
    --pale_green: #709880;
    --orange: #EC722E;
    --yellow: #FAE00B;
    --black: #04160A;
    --grey: #4B4E4C;
    --light-grey: #e3e3e3;
    
    /*
    * GUTTERS
    */
    --gutter: 0.938rem;
    
    
    /*
    * TYPOGRAPHY
    */
    
    h1, .h1 {
        font-size: 3.125rem;
    }

    h2, .h2 {
        font-size: 2.625rem;
    }

    h3, .h3 {
        font-size: 2.188rem;
    }

    h4, .h4 {
        font-size: 1.75rem;
    }

    h5, .h5 {
        font-size: 1.375rem;
    }

    h6, .h6 {
        font-size: 1rem;
    }
    
    font-size: 16px;
  }
`;

export {};