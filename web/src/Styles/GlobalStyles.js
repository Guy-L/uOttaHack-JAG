import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box
    }
    body {
        background-color:${props => props.theme.bgColor};
        color:${props => props.theme.blackColor};
        font-size:14px;
        margin:auto;
        padding: auto;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Courier, monospace, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        color:${props => props.theme.blueColor};
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }

    #navigation-bar {
        -webkit-box-shadow: 2px 2px 1px #000000;
        -moz-box-shadow:    2px 2px 1px #000000;
        box-shadow:         1px 1px 1px #000000;
        z-index:999;
        position: fixed; /* Set the navbar to fixed position */
    }

    #brand{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  
        font-style: italic;      
    }

    .inline {
        display: inline-block;
    }

    #summary{
        position: absolute;
        float:left;
    }

    #bottom-right .col-6 {
        bottom:0; 
        right:0;
        margin: auto;
        padding-bottom:0 !important;  
    }
`;