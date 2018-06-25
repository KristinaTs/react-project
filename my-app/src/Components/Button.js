import React, {Component} from 'react';
import  './Button.css';

class Button extends Component {

    state = {
        isSelected: false,
        interval: 0,
        intervalId: 0
    };

    toggleSelect = () => {
        let isSelected = !this.state.isSelected;
        this.setState({isSelected: isSelected});
        this.setInterval();
    };

    setInterval = () => {
        this.state.intervalId = setInterval(()=> {
            this.setState((prevState) => {
                {interval: prevState.interval++}
            });
        }, 1000);

    };

    render() {
        let buttonText = this.state.isSelected ? 'Stop' : 'Start';
        let buttonClass = this.state.isSelected ? 'button red' : 'button green';
        return (
            <div>
                <div>Interval: {this.state.interval}</div>
                <button className={buttonClass} onClick={this.toggleSelect.bind(this)}>{buttonText}</button>
            </div>
        );
    }
}

export default Button;
