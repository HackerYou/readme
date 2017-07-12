import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TestResults from './TestResults';
import * as classroomActions from '../../actions/classroomActions/classroomActions';

const mapStateToProps = ({ classroom }) => {
    return {
        classroom,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...classroomActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResults);
