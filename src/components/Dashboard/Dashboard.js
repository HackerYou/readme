import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({ auth }) => (
    <div>
        <pre>
            {JSON.stringify(auth, null, 3)}
        </pre>
    </div>
);

Dashboard.propTypes = {
    auth: PropTypes.shape({
        loggedIn: PropTypes.bool.isRequired,
    }).isRequired,
};

export default Dashboard;
