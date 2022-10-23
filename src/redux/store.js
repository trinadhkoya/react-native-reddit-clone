import {applyMiddleware, createStore} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from 'redux/rootReducer';

const persistConfig = {
  key: 'root',
  storage: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
