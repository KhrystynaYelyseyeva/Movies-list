import React, {Component} from 'react';
import '../App.css';

import MovieItem from "./MovieItem";
import MovieTabs from "./MovieTabs";
//import {moviesData} from "../movieData";
import {API_URL, API_KEY} from "../utils/api";


class App extends Component {
    state = {
        movies: [],
        willWatch: [],
        sort_by: 'popularity.desc',
        page: 1,
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sort_by !== this.state.sort_by ||
            prevState.page !== this.state.page) this.getMovies();
    };

    getMovies = () => {
        fetch(`${API_URL}${API_KEY}&sort_by=${this.state.sort_by}&page=${this.state.page}`)
            .then(data => data.json())
            .then(data => this.setState({movies: data.results}))
    };
    // likeMovie = () => {
    //     this.setState((prevState, props) => {
    //         return {like: !prevState.like}
    //     });
    // };

    deleteMovie = movie => {
        this.setState((prevState, props) => {
            return {movies: prevState.movies.filter(item => item.id !== movie.id)}
        })
    };

    addMovieWish = movie => {
        this.setState((prevState, props) => {
            return {willWatch: [...prevState.willWatch, movie]}
        });
    };

    deleteMovieFromWish = movie => {
        this.setState((prevState, props) => {
            return {willWatch: prevState.willWatch.filter(item => item.id !== movie.id)}
        })
    };

    updatePage = value => {
        this.setState({sort_by: value})
    };

    getPrevPage = () => {
        this.setState((prevState, props) => {
            return {page: prevState.page !== 1 ? prevState.page - 1 : prevState.page}
        });
    }

    getNextPage = () => {
        this.setState((prevState, props) => {
            return {page: prevState.page !== 500 ? prevState.page + 1 : prevState.page}
        });
    }

    render() {
        const {movies, willWatch, sort_by} = this.state;

        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-9">
                        <div className="row mb-4">
                            <div className="col-12">
                                <button onClick={this.getPrevPage} className="btn btn-dark m-2">Prev</button>
                                {this.state.page}
                                <button onClick={this.getNextPage} className="btn btn-dark m-2">Next</button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-12">
                                <MovieTabs
                                    sort_by={sort_by}
                                    updatePage={this.updatePage}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {movies.map(movie =>
                                <div className="col-6 mb-4" key={movie.id}>
                                    <MovieItem
                                        movie={movie}
                                        addMovieWish={this.addMovieWish}
                                        deleteMovieFromWish={this.deleteMovieFromWish}
                                        overview={movie.overview}
                                        title={movie.title}
                                        src={movie.poster_path || movie.backdrop_path}
                                        vote_average={movie.vote_average}
                                        deleteMovie={this.deleteMovie}
                                    />
                                </div>)}
                        </div>
                    </div>
                    <div className="col-3">
                        <p>Will Watch: {willWatch.length}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
