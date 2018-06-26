import React, {Component} from 'react';
import Movies from './Movies';

class Program extends Component {

    state = {
        1: {
            movies: [
                {
                    name: 'Movie1',
                    freePlaces: 5

                },
                {
                    name: 'Movie2',
                    freePlaces: 10

                },
                {
                    name: 'Movie3',
                    freePlaces: 11

                }
            ]
        },
        2: {
            movies: [
                {
                    name: 'Movie133',
                    freePlaces: 5

                },
                {
                    name: 'Movie233',
                    freePlaces: 10

                },
                {
                    name: 'Movie333',
                    freePlaces: 11

                }
            ]
        },
        3: {
            movies: [
                {
                    name: 'Movie12',
                    freePlaces: 5

                },
                {
                    name: 'Movie233',
                    freePlaces: 10

                },
                {
                    name: 'Movie333',
                    freePlaces: 0
                }
            ]
        }
    };

    reservePlace = (event) => {
        if(event.target.disabled) {
            alert('No free places');
        } else {
            let programId = this.props.match.params.id;
            let movies = [...this.state[programId].movies];
            let newMovie = {};
            movies.forEach(movie => {
                if(movie.name === event.target.name) {
                    movie.freePlaces--;
                }
            });
            let newProgram = {
                programId: movies
            }

            this.setState(
            {programId: newProgram}
            );

        }
    }

    render() {
        let programId = this.props.match.params.id;
        return (
            <div>
                <Movies movies={this.state[programId].movies} reservePlace={this.reservePlace}/>
            </div>
        );
    }
}

export default Program;