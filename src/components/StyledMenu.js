import styled from "styled-components"

export const Navigation = styled.nav`
height: 10vw;
width: 80%;
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
color: white;
background-color: #1877F2;
font-weight: bolder;
`
export const List = styled.ul`
padding: 5vw;
width: 45%;
display: flex;
justify-content: space-around;
`
export const ListItem = styled.li`
list-style: none;
font-size: 1.25vw;
font-weight: lighter;
position: relative;

&::after {
    content: "";
    position: absolute;
    top: 1.75vw;
    left: 0;
    height: 3px;
    width: 10px;
    background: transparent;
    transition: 500ms;
}

&:hover:after{
    width: 100%;
    background-color: #000;
}
`
export const Title = styled.p`
padding: 3vw;
font-size: 1.75vw;
font-weight: bolder;
`

export const Conteiner = styled.div`
width: 100%;
background-color: #000;
`


