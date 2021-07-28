import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
`

export const MegaBox = styled.section`
height: 10.60vw;
width: 100%;
margin: auto;
display: flex;
align-items: flex-end;
color: #fff;
background-color: #000;
`

export const Conteiner = styled.div`
height: 10.25vw;
width: 80%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
background-color: #1877F2;
`

export const Paragraph = styled.p`
font-size: 1.5vw;
font-weight: bolder;
`