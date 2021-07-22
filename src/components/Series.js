import React, { Component } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import axios from "axios"

const ApiSeries = axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=f8cb788b7856602817698946152e255c&language=pt-BR"
})

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
    background-color: black;
    color: white;
    list-style: none;
}
`

const MegaBox = styled.section``

const Conteiner = styled.div`
padding: 3vw;
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const ListName = styled.h1``

const List = styled.ul`
padding: 2vw;
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
border: 4px white solid;
`

const ListImg = styled.img``

const ListOverview = styled.p`
padding: 2vw;
text-align: center;
`

const Input = styled.input`
height: 3vw;
width: 15vw;
`

const ListVote = styled.p``

export default class Series extends Component {

    state = {
        series: [],
        filterList: []
    }

    componentDidMount() {
        this.getSeries()
    }

    getSeries = async () => {
        const response = await ApiSeries.get()
        console.log(response.data.results)
        
        const completeSeries = response.data.results.map((item) => {
            return{
                ...item,
                backdrop_path: `https://image.tmdb.org/t/p/w200${item.poster_path}`
            }
        })
        this.setState({
            series: completeSeries,
            filterList: completeSeries
        })
    }

    handleChange = (event) => {
        const { series } = this.state
        if(event.target.value === "") {
            this.setState({
                filterList: series
            })
            return
        }
        const filterItemConvert = series.filter((item) => {
            if(item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
                return true
            }
            return false
        })
        this.setState({
            filterList: filterItemConvert
        })
    }

    render() {
        return(
                <MegaBox>
                    <GlobalStyle />
                    <Conteiner>
                        <Input
                            type="texte"
                            onChange={this.handleChange}
                            placeholder="Busque aqui"
                        />
                    </Conteiner>
                    {this.state.filterList.map((item, index) => ( 
                        <List key={index}>
                            <ListName>{item.name}</ListName>
                            <ListVote>{item.vote_average}</ListVote>
                            <ListOverview>{item.overview}</ListOverview>
                            <Conteiner>
                                <ListImg src={item.backdrop_path} alt="poster de series" />
                            </Conteiner>
                        </List>
                    ))}
                </MegaBox>
        )
    }
}
