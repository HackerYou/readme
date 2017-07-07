import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonActions from '../../actions/lessonActions';
import Lesson from './Lesson';


const mapStateToProps = (state) => {
    return {
        lesson: state.lesson,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(lessonActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
