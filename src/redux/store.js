import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(allReducers, applyMiddleware(thunk, logger));

export default store;