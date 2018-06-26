import React from 'react';

const cinema = (props) => {
    return (
        <div>
            <img style={{width: 150}} src={props.image}/>
            <div>{props.name}</div>
            <div>{props.workTime}</div>
            <div style={{cursor: 'pointer', color: 'blue'}} id={props.program.id} onClick={props.navigateToProgram}>{props.program.name}</div>
        </div>
    )
};

export default cinema;