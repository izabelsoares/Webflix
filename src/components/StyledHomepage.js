import styled from "styled-components"
import índice from "../img/d64.gif"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: white;
}

body {
    height: 100vh;
    width: 100%;
}
`

export const Conteiner = styled.section`
height: 38vw;
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
background-image: url(${índice});
background-size: cover;
background-repeat: no-repeat; 
`

export const Box = styled.div`
height: 38vw;
width: 50vw;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`

export const Title = styled.h1`
padding: 3vw;
text-align: center;
font-size: 3vw;
`

export const Paragraph = styled.p`
text-align: flex-end;
font-size: 1.75vw;
`