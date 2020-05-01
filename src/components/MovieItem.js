import React, {Component} from "react";

class MovieItem extends Component {
    state = {
            wish: false,
            show: false,
        };



    showOverview = () => {
        this.setState((prevState, props) => {
            return {show: !prevState.show}
        });
    };



    render() {
        const {show, wish} = this.state;
        const {
            src,
            title,
            vote_average,
            overview,
            addMovieWish,
            deleteMovieFromWish,
            deleteMovie,
            movie
        } = this.props;
        return (
            <div className="MovieItem card">
                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${src}`} alt={title}/>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <button className="btn btn-info"
                            onClick={this.showOverview}>{show ? 'Close' : 'Read more...'}
                    </button>
                    {show && <p>{overview}</p>}
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {vote_average}</p>
                        {wish ? <button
                            className="btn btn-success"
                            onClick={()=>{
                                this.setState({
                                    wish: false,
                                });
                            deleteMovieFromWish(movie);
                            }}>
                            Delete Wish
                        </button>:
                        <button
                            className="btn btn-secondary"
                            onClick={()=>{
                                this.setState({
                                    wish: true,
                                });
                                addMovieWish(movie);}}>
                           Wish
                        </button>}
                    </div>
                    <button className="btn btn-danger"
                            onClick={deleteMovie.bind(null, movie)}>Delete movie
                    </button>
                </div>
            </div>
        )
    }
};

export default MovieItem;