import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateTests from './CreateTests';
import * as classroomActions from '../../actions/classroomActions/classroomActions';
import * as testActions from '../../actions/testActions/testActions';

const mapStateToProps = ({ classroom, tests }) => {
    return {
        classroom,
        tests,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...classroomActions, ...testActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTests);

