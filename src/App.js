import React, { Component } from "react"
import Movies from "./components/Movies"
import Series from "./components/Series"
import Homepage from "./components/Homepage"
import {Conteiner, Navigation, List, ListItem, Title} from "./components/StyledMenu"
import Footer from "./components/Footer"
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

export default class App extends Component {


    render(){
        const linkStyle = {
            color: "#000",
            textDecoration: "none",
        }

        return(

            <Router>

                <Conteiner>
                    <GlobalStyle />
                    <Navigation>

                            <Title>WebFlix</Title>

                        <List>

                            <ListItem>
                                <Link to="/" style={linkStyle}>Inicial</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/filmes" style={linkStyle}>Filmes</Link>
                            </ListItem>

                            <ListItem>
                                <Link to="/series" style={linkStyle}>Séries</Link>
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

                </Conteiner>
                <Footer />


            </Router>
        )
    }
}


//https://api.themoviedb.org/3/movie/popular?api_key=f8cb788b7856602817698946152e255c
//https://api.themoviedb.org/3/tv/popular?api_key=f8cb788b7856602817698946152e255c
//https://image.tmdb.org/t/p/w200${item.poster_path}