import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as coursesActions from '../../actions/coursesActions/coursesActions';
import Dashboard from './Dashboard';

const mapStateToProps = ({ auth, courses, user }) => {
    return { auth, courses, user };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(coursesActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
