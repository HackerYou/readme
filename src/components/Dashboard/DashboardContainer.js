import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions/courseActions';
import Dashboard from './Dashboard';

const mapStateToProps = ({ auth, course, user }) => {
    return { auth, course, user };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
