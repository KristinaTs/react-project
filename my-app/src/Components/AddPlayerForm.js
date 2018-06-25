import React from 'react';

const form = (props) => {
    return (
        <div>
            <input type="text" name="playerName" />
            <select name="position">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select name="team">
                <option value="batuni">Batuni</option>
                <option value="Bastuni">Bastuni</option>
            </select>
        </div>
    )
};

export default form;