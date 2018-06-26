import React, {Component} from 'react';
import Cinemas from './Cinemas';

class Home extends Component {

    state = {
        cinemas: [
            {
                image: 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365__340.jpg',
                name: 'Bastun',
                workTime: '10pm',
                program: {
                    id: '3',
                    name: 'program'
                }
            },
            {
                image: 'https://cdn.pixabay.com/photo/2017/02/06/12/34/reptile-2042906_960_720.jpg',
                name: 'Bastun1',
                workTime: '10pm',
                program: {
                    id: '1',
                    name: 'program'
                }
            },
            {
                image: 'https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365__340.jpg',
                name: 'Bastun2',
                workTime: '10pm',
                program: {
                    id: '2',
                    name: 'program'
                }
            },
        ]
    };

    navigateToProgram = (event) => {
        let programId = event.target.id;
        this.props.history.push(`/program/${programId}`);
    }

    render() {
        return (
            <div>
                <Cinemas cinemas={this.state.cinemas} navigateToProgram={this.navigateToProgram}/>
            </div>
        );
    }
}

export default Home;
