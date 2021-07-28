import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
}
`

export const MegaBox = styled.section`
background-color: white;
`

export const Conteiner = styled.div`
padding: 5vw;
width: 79vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
color: white;
`

export const ListName = styled.h1`
padding: 2vw;
text-align: center;
font-size: 2vw;
`

export const List = styled.div`
width: 45vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
border: 8px double #1877F2;
transition: 1s;

&:hover{
    transform: scale(102%)
}
`

export const ListImg = styled.img`
padding: 1vw;
width: 25vw;
height: 30vw;
`

export const ListOverview = styled.p`
padding: 2vw;
text-align: center;
font-size: 1.25vw;
`

export const Input = styled.input`
height: 3vw;
width: 15vw;
color: black;
border-color: black;
border-radius: 7px;
`

export const Box = styled.div`
padding: 3vw;
height: auto;
width: 79vw;
margin: auto;
background-color: black;

`

export const ListVote = styled.p`
font-size: 1.5vw;
`

export const Title = styled.h1``