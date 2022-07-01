import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        
        /* Azul */
        --blue-200: #cdd9f4;
        --blue-300: #9bb3ea;
        --blue-500: #698cdf;
        --blue-700: #3766d5;
        --blue-900: #0540ca;

        /* Escala De Cinza */
        --gray-0: #ffffff;
        --gray-50: #e7e7e7;
        --gray-100: #cfcfcf;
        --gray-200: #b7b7b7;
        --gray-300: #9f9f9f;
        --gray-400: #888887;
        --gray-500: #70706f;
        --gray-600: #585857;
        --gray-700: #40403f;
        --gray-800: #282827;
        --gray-900: #111110;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body, input, textarea, select, button{
        font-family: 'Open Sans', sans-serif;;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    .react-modal-overlay{
        position: absolute;
        left: 0;
        right: 0;
        top: 8rem;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
    }
    
    .react-modal-content{
        position: absolute;
        right: 0;
        top: 0;
        width: 100vw;
        height: 9rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;

        ul{
            width: 100vw;
            list-style: none;
            text-align: center;

            li{
                height: 3rem;
                line-height: 3rem;
                &:hover{
                    cursor: pointer;
                    background-color: var(--gray-100);
                }
            }

            li + li{
                
            }

        }
    }

`

export const ContainerHome = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    
    div{
        
    }
`