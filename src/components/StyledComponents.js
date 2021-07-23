import styled from "styled-components"
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

export const MegaBox = styled.section`
padding: 4vw;
`

export const Conteiner = styled.div`
padding: 5vw;
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`

export const ListName = styled.h1`
padding 3vw;
text-align: center;
font-size: 2vw;
`

export const List = styled.div`
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
border: 4px white ridge;
border-radius: 5vw;
transition: 1s;

&:hover{
    transform: scale(102%)
}
`

export const ListImg = styled.img`
padding 3vw;
width: 35vw;
`

export const ListOverview = styled.p`
padding: 2vw;
text-align: center;
font-size: 1.5vw;
`

export const Input = styled.input`
height: 3vw;
width: 15vw;
color: black;
`

export const ListVote = styled.p`
font-size: 1.5vw;
`

export const Box = styled.div`
padding: 5vw;
`
