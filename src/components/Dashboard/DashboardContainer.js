import { connect } from 'react-redux';

import Dashboard from './Dashboard';

const mapStateToProps = ({ auth }) => {
    return { auth };
};

export default connect(mapStateToProps)(Dashboard);
