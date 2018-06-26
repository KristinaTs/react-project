import React from 'react';
import Movie from './Movie';

const movies = (props) => {
    return props.movies.map((movie) => (
            <Movie name={movie.name} key={movie.id} freePlaces={movie.freePlaces} reservePlace={props.reservePlace}/>
        )
    )
};

export default movies;