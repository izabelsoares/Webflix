import React, { Component } from "react"
import { createGlobalStyle } from "styled-components"
import axios from "axios"
import {MegaBox, Conteiner, ListName, List, ListImg, ListOverview, Input, ListVote, GlobalStyle, Title, Box} from "./StyledComponents"

const ApiSeries = axios.create({
    baseURL:"https://api.themoviedb.org/3/tv/popular?api_key=f8cb788b7856602817698946152e255c&language=pt-BR"
})


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
                        <Title>Séries</Title>
                        <Input
                            type="texte"
                            onChange={this.handleChange}
                            placeholder="Busque aqui"
                        />
                    </Conteiner>
                    <Box>
                    {this.state.filterList.map((item, index) => ( 
                        <List key={index}>
                            <ListName>{item.name}</ListName>
                            <ListVote>{item.vote_average}</ListVote>
                            <ListImg src={item.backdrop_path} alt="poster de series" />
                            <ListOverview>{item.overview}</ListOverview>
                        </List>
                    ))}
                    </Box>
                </MegaBox>
        )
    }
}
