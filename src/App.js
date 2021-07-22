import React, { Component } from "react"
import Movies from "./components/Movies"
import Series from "./components/Series"
import Homepage from "./components/Homepage"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom"


const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    width: 100%;
}
`

const Navigation = styled.nav`
padding: 5vw;
height: 5vw;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #7a0000;
color: white;
font-weight: bolder;
`

const List = styled.ul`
padding: 5vw;
width: 100%;
display: flex;
justify-content: space-around;
`

const ListItem = styled.li`
padding: 1vw;
background-color: #fff;
list-style: none;
font-size: 1.25vw;
font-weight: lighter;
`

const Paragraph = styled.p`
font-weight: bolder;
`


export default class App extends Component {


    render(){
        return(
            <Router>

                <div>
                    <GlobalStyle />
                    <Navigation>

                            <Paragraph>WebFlix</Paragraph>

                        <List>

                            <ListItem>
                                <Link to="/">Inicial</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/filmes">Filmes</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/series">Séries</Link>
                            </ListItem>

                        </List>
                    </Navigation>

                    <Switch>

                        <Route path="/series">
                            <Series />
                        </Route>

                        <Route path="/filmes">
                            <Movies />
                        </Route>

                        <Route path="/">
                            <Homepage />
                        </Route>

                    </Switch>

                </div>


            </Router>
        )
    }
}


//https://api.themoviedb.org/3/movie/popular?api_key=f8cb788b7856602817698946152e255c
//https://api.themoviedb.org/3/tv/popular?api_key=f8cb788b7856602817698946152e255c
//https://image.tmdb.org/t/p/w200${item.poster_path}