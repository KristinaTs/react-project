import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './Components/Players';
import AddPlayerForm from './Components/AddPlayerForm'
import Button from './Components/Button';

class App extends Component {

    state = {
        players: [
            {
                name: "Bastun (Slavi)",
                position: "8",
                team: "Batuni"
            },
            {
                name: "Tochno",
                positon: '7',
                team: 'BASTUNI'
            }
        ]
    }

    addPlayer = (name, position, team) => {
        let newPlayers = [...this.state.players];
        newPlayers.push({
            name: name,
            position: position,
            tema: team
        });
        this.setState({players: newPlayers});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    <Players players={this.state.players}/>
                    <AddPlayerForm addPlayer={this.addPlayer}/>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Button />
            </div>
        );
    }
}

export default App;
