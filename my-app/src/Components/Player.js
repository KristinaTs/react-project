import React from 'react';

const player = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.position}</div>
            <div>{props.team}</div>
        </div>
    )
};

export default player;