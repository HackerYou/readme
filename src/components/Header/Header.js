import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ actions, user }) => {
    return (<header className="mainHeader">
        <div className="innerWrap card">
            <Link to="/dashboard" className="linkBtn topLogo">
                HackerYou Logo
            </Link>
            <div className="userInfo">
                <h3>Hello, {user.firstName} {user.lastName}</h3>
                <p className="signOut">
                    <button className="strong" onClick={actions.logOutUser}>
                        <i className="chalk-log-out" />Log out of {user.email}
                    </button>
                </p>
            </div>
        </div>
    </header>);
};

Header.propTypes = {
    actions: PropTypes.shape({
        logOutUser: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default Header;
