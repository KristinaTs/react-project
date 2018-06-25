import React from 'react';
import PLayer from './Player';

const players = (props) => {
    return props.players.map((player) => (
            <PLayer key={player.id} name={player.name} position={player.position} team={player.team}/>
        )
    )
};

export default players;