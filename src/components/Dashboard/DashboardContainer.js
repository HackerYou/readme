import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import Dashboard from './Dashboard';

const mapStateToProps = ({ auth, course }) => {
    return { auth, course };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(courseActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
