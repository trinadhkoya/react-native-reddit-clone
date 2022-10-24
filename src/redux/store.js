import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from 'redux/rootReducer';
import rootSaga from 'redux/saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
