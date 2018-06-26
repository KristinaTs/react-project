import React, {Component} from 'react';

class Login extends Component {

    state = {
        formData: {
            username: {value: ""},
            password: {value: ""}
        },
        users: [
            {
                username: 'Bastun',
                password: '1234'
            },
            {
                username: 'Bastun1',
                password: '1234'
            },
            {
                username: 'Bastun2',
                password: '1234'
            },
        ]
    }


    handleChange = (event) => {
        let key = event.target.name;
        const newFormData = { ...this.state.formData };
        const newField = { ...newFormData[key] };
        newField.value = event.target.value;
        newFormData[key] = newField;
        this.setState({
            formData: newFormData
        });
    };

    submitForm = () => {
        let userIsRegistered = false;
        this.state.users.forEach(user => {
            if(user.username === this.state.formData.username.value && user.password === this.state.formData.password.value) {
                userIsRegistered =  true;
            }
        });
        if(userIsRegistered) {
            this.props.history.push("/");
        } else {
            alert('Wrong username or password!');
        }

    }

    render() {
        return (
            <div>
                <input type="text" name="username" value={this.state.formData.username.value} onChange={this.handleChange}/>
                <input type="password" name="password" value={this.state.formData.password.value} onChange={this.handleChange}/>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }
}

export default Login;
