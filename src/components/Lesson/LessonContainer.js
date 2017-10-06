import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lessonActions from '../../actions/lessonActions/lessonActions';
import * as issuesActions from '../../actions/issuesActions/issuesActions';
import Lesson from './Lesson';


const mapStateToProps = (state) => {
    return {
        lesson: state.lesson,
        admin: state.user.admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Object.assign({}, lessonActions, issuesActions), dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lesson);
