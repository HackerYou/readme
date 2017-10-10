import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Media from './Media';
import * as mediaActions from '../../actions/mediaActions/mediaActions';

const mapStateToProps = ({ media }) => {
    return {
        media,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({ ...mediaActions }, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);
