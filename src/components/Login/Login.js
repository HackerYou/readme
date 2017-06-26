import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Input from '../Forms/Input/Input';
import * as authActions from '../../actions/authActions';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const { logInUser } = this.props.actions;
        const credentials = {
            email: this.state.email,
            password: this.state.password,
        };
        logInUser(credentials);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      labelText="Email"
                      value={this.state.email}
                      handleChange={this.handleChange}
                    />
                    <Input
                      name="password"
                      type="password"
                      labelText="Password"
                      value={this.state.password}
                      placeholder="Enter your password"
                      handleChange={this.handleChange}
                    />
                    <Input
                      type="submit"
                      name="submit"
                      value="Log In"
                      labelText=""
                    />
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.shape({
        logInUser: PropTypes.func.isRequired,
    }).isRequired,
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
