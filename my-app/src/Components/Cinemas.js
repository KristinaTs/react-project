import React from 'react';
import Cinema from './Cinema';

const cinemas = (props) => {
    return props.cinemas.map((cinema) => (
            <Cinema image={cinema.image} key={cinema.id} name={cinema.name} workTime={cinema.workTime} program={cinema.program} navigateToProgram={props.navigateToProgram}/>
        )
    )
};

export default cinemas;