import { all, call } from 'redux-saga/effects';
import appSagas from './app/sagas';

function* rootSaga() {
    yield all([
        call(appSagas)
    ]);
}

export default rootSaga;