import React, {Component} from 'react';
import './App.css';

import MovieItem from "./MovieItem";
import {moviesData} from "./movieData";

class App extends Component {
    state = {
        movies:moviesData,
        src: 'https://upload.wikimedia.org/wikipedia/ru/thumb/d/de/Форрест_Гамп.jpg/227px-Форрест_Гамп.jpg',
        title: 'Forrest Gump',
        vote_average: 9.8,
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        show: false,
        like:false,
    };

    showOverview = () => {
        this.setState((prevState, props) => {
                return {show: !prevState.show}
            });
    };

    likeMovie=()=>{
        this.setState((prevState,props)=>{
           return {like: !prevState.like}
        });
    };

    render() {
        const {src, title, vote_average, overview, show, like} = this.state;

        return (
            <MovieItem likeMovie={this.likeMovie}
                       like={like}
                       showOverview={this.showOverview}
                       show={show}
                       overview={overview}
                       src={src}
                       title={title}
                       vote_average={vote_average}/>
        );
    }
}

export default App;
