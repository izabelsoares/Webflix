import React, { Component } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import índice from "../img/d64.gif"

const GlobalStyle = createGlobalStyle`
* {
    padding: 0,
    margin: 0;
    box-sizing: border-box
}

body {
    height: 100vh;
    width: 100%;
    color: #fff;
    background-color: black;
}
`
const Conteiner = styled.section`
background-image: url(${índice});
background-size: cover;
background-repeat: no-repeat; 
margin: auto;
width: 50vw;
height: 38.10vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const Box = styled.div`
width: 50vw;
height: 35vw;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`

const Title = styled.h1`
padding: 3vw;
text-align: center;
font-size: 3vw;
`

const Paragraph = styled.p`
text-align: flex-end;
font-size: 1.75vw;
`


export default class Homepage extends Component {


    render(){
        return(
            <Conteiner>
                <GlobalStyle />
                    <Title>Bem-Vindos ao:</Title>
                <Box>
                    <Title>WebFlix</Title>
                    <Paragraph>O seu site de avaliações de filmes e séries =)</Paragraph>
                </Box>
            </Conteiner>
        )
    }
}