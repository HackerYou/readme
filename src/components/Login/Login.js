import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import Footer from '../Footer/Footer';
=======
import Members from '../Members/Members';
>>>>>>> f2dc5af074f16d0f9e50f5d7f5244cd5a4615f33

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
                <button onClick={this.props.actions.logOutUser}>Logout</button>
                <Footer />
                <Members/>
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
