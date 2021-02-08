import { connect } from 'react-redux';
import * as appActions from '../redux/app/actions';
import * as appSelectors from '../redux/app/selector';
import App from './app';

const mapStateToProps = (state, ownProps) => {
    return {
        isCreated: appSelectors.getAppCreated(state),
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate() {
            dispatch(appActions.created());
            dispatch(appActions.triggerCreated());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
