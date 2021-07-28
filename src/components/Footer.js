import React, { Component } from "react"
import { GlobalStyle } from "./StyledFooter"
import { MegaBox, Conteiner, Paragraph} from "./StyledFooter"

export default class Footer extends Component {

    render(){
        return(
            <MegaBox>
                <GlobalStyle />
                <Conteiner>
                    <Paragraph>Projeto produzido para fins exclusivamente educacionais. </Paragraph>
                </Conteiner>
            </MegaBox>
        )
    }
}