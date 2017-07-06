import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../actions/authActions';
import Header from './Header';

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        user: state.user,
    };
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(authActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
