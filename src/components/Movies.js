import React, { Component } from "react"
import axios from "axios"
import {MegaBox, Conteiner, ListName, List, ListImg, ListOverview, Input, ListVote, GlobalStyle, Title, Box} from "./StyledComponents"

const ApiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=f8cb788b7856602817698946152e255c&language=pt-BR"
})

export default class Movies extends Component {

    state = {
        movies: [],
        filterList: []
    }

    componentDidMount() {
        this.getMovies()
    }

    getMovies = async () => {
        const response = await ApiMovies.get()
        console.log(response.data.results)

        const completeMovies = response.data.results.map((item) => {
            return{
                ...item,
                poster_path: `https://image.tmdb.org/t/p/w300${item.poster_path}`
            }
        })
        
        this.setState({
            movies: completeMovies,
            filterList: completeMovies
        })
    }

    handleChange = (event) => {
        const { movies } = this.state
        if(event.target.value === ""){
            this.setState({
                filterList: movies
            })
            return
        }
        const filterItemConvert = movies.filter((item) => {
            if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return true
            }
            return false
        })
        this.setState({
            filterList: filterItemConvert
        })
    }

    render(){
        return( 
                <MegaBox>
                    <GlobalStyle />
                    <Conteiner>
                        <Title>Filmes</Title>
                        <Input 
                        type="text"
                        placeholder="Busque aqui"
                        onChange={this.handleChange} />
                    </Conteiner>
                    <Box>
                        {this.state.filterList.map((item, index) => (
                        <List key={index}>
                            <ListName>{item.title}</ListName>
                            <ListVote>{item.vote_average}</ListVote>
                            <ListImg src={item.poster_path} alt="poster de filmes" />
                            <ListOverview>{item.overview}</ListOverview>
                        </List>
                    ))}
                    </Box>
                </MegaBox>
        )
    }
}

//f8cb788b7856602817698946152e255c&language=pt-BR