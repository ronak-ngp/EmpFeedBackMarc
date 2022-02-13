import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxthunk from 'redux-thunk';
import rootreducer from './root-reducer';

const middlewares = [reduxthunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

const store = createStore(rootreducer,applyMiddleware(...middlewares));

export default store;