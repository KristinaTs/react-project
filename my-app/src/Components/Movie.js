import React from 'react';

const movie = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.freePlaces}</div>
            <button disabled={props.freePlaces === 0 ? true : null} name={props.name} onClick={props.reservePlace}>Reserve</button>
        </div>
    )
};

export default movie;