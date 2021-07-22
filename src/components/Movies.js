import React, { Component } from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import axios from "axios"

const ApiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=f8cb788b7856602817698946152e255c&language=pt-BR"
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

const Megabox = styled.section``

const Conteiner = styled.div`
padding: 3vw;
width: 70vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`

const Input = styled.input`
height: 3vw;
width: 15vw;
`

const List = styled.ul`
padding: 3vw;
width: 50vw;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
border: white 2px solid;
`

const ListName = styled.h1``

const ListOverview = styled.p`
padding: 2vw;
text-align: center;
`

const ListImg = styled.img``

const ListVote = styled.p``


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
                <Megabox>
                    <GlobalStyle />
                    <Conteiner>
                        <Input 
                        type="text"
                        placeholder="Busque aqui"
                        onChange={this.handleChange} />
                    </Conteiner>
                    {this.state.filterList.map((item, index) => (
                        <List key={index}>
                            <ListName>{item.title}</ListName>
                            <ListVote>{item.vote_averege}</ListVote>
                            <ListOverview>{item.overview}</ListOverview>
                            <ListImg src={item.poster_path} alt="poster de filmes" />
                        </List>
                    ))}
                </Megabox>
        )
    }
}

//f8cb788b7856602817698946152e255c&language=pt-BR