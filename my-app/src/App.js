import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  Login  from './Components/Login'
import {BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Program from './Components/Program';

class App extends Component {

    state = {
        users: [
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
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/program/:id" exact component={Program}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
