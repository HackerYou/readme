import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as classroomActions from '../../actions/classroomActions/classroomActions';
import Classroom from './Classroom';

const mapStateToProps = ({ classroom, user }) => {
    return {
        user,
        classroom,
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(classroomActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Classroom);
