import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { isLoggedIn } from '../../services/authService';
import Input from '../Forms/Input/Input';
import * as authActions from '../../actions/authActions';
import HYLogo from '../../images/logo-hackeryou.svg';

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
        return isLoggedIn() ?
        (
            <Redirect to={{ pathname: '/dashboard' }} />
        ) : (
            <div className="card loginCard">
                <form onSubmit={this.handleSubmit}>
                    <img src={HYLogo} className="loginLogo" alt="HackerYou Logo" />
                    <h1>readme</h1>
                    <div className="fieldGroup">
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            labelText="Email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="fieldGroup">
                        <Input
                            name="password"
                            type="password"
                            labelText="Password"
                            value={this.state.password}
                            placeholder="Enter your password"
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="fieldGroup">
                        <Input
                            type="submit"
                            name="submit"
                            value="Log In"
                            labelText=""
                            classes="button primary"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.shape({
        logInUser: PropTypes.func.isRequired,
        logOutUser: PropTypes.func.isRequired,
    }).isRequired,
};


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authActions, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
