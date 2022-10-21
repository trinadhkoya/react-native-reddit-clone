import rootReducer from './rootReducer';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const store = createStore(persistedReducer, applyMiddleware(thunk));
