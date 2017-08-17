import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CourseTemplates from './CourseTemplates';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';
import * as courseActions from '../../actions/courseActions/courseActions';

const mapStateToProps = ({ course }) => {
    return {
        course,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...courseActions, ...broadcastActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseTemplates);
