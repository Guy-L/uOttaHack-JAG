import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles =  createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');
    * {
        box-sizing:border-box
    }


    .container {
        width: 200px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: absolute;
    }


    @keyframes poundingCircleAnimation {
        from {
            transform: scale(.5, .5);
            opacity: .5;
        }
        to {
            transform: scale(2.5, 2.5);
            opacity: 0;
        }
    }

    .pounding-circle{
        border-radius: 50%;
        background-color: red;
        width: 50px;
        height: 50px;
        position: absolute;
        opacity: 0;
        animation: poundingCircleAnimation 4s infinite cubic-bezier(.36, .11, .89, .32);
        animation-delay: -4
    }
`;

export default GlobalStyles;