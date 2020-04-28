import React from "react";

const MovieItem = ({
                       src,
                       title,
                       vote_average,
                       overview,
                       showOverview,
                       show,
                       like,
                       likeMovie,
                   }) => {
    const yes = {color:'orange'},
        no = {color:'blue'};
    return (
        <div className="MovieItem">
            <img src={src} alt={title}/>
            <h2>{title}</h2>
            <p>{vote_average}</p>
            <button onClick={showOverview}>{show ? 'Close' : 'Read more...'}</button>
            {show && <p>{overview}</p>}
            <button onClick={likeMovie} style={like ? yes : no}>Like</button>
        </div>
    )
};

export default MovieItem;