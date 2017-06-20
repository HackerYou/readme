import React from 'react';
import Input from '../Forms/Input/Input';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <Input
                  name="username"
                  type="email"
                  placeholder="Enter your email"
                  labelText="Username"
                  handleChange={this.handleChange}
                />
                <Input
                  name="password"
                  type="password"
                  labelText="Password"
                  placeholder="Enter your password"
                  handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Login;
