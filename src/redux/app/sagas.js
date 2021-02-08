import { takeEvery, select } from 'redux-saga/effects';
import * as actionTypes from './action-types';
import * as selectors from './selector';

function* triggerCreated(action) {
    const isCreated = yield select(selectors.getAppCreated);
    console.log('App created sagas', { isCreated, action });
}

export default function* appSagas() {
    yield takeEvery(actionTypes.TRIGGER_CREATED, triggerCreated);
}
