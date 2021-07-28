import React, { Component } from "react"
import {Conteiner,Box,Title, Paragraph, GlobalStyle} from "./StyledHomepage"

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