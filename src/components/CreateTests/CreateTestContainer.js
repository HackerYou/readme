import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateTests from './CreateTests';
import * as classroomActions from '../../actions/classroomActions';

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateTests);

