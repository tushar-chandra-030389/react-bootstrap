import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    thunk,
];

const isDevelopment = process.env.NODE_ENV === 'development';

const composeEnhancers = isDevelopment ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
);

//Register saga
sagaMiddleware.run(rootSaga);

if (isDevelopment) {
    window.$store = store;
}

export default store;
