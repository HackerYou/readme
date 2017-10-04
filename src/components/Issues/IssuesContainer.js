import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Issues from './Issues';
import * as issuesActions from '../../actions/issuesActions/issuesActions';

const mapStateToProps = ({ issues }) => {
    return {
        issues,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...issuesActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
