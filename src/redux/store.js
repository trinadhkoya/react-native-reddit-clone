import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootReducer from 'redux/rootReducer';
import rootSaga from 'redux/saga';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),

  // composeEnhancers(applyMiddleware(sagaMiddleware)),
);
// sagaMiddleware.run(rootSaga);

export default store;
