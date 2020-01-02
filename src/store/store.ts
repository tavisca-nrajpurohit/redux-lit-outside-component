import { createStore, combineReducers, applyMiddleware} from '@rakoon-badshah/dynamic-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from './rootReducer';

const logger1 = store => next => action =>{
    console.log('state logger 1', store.getState());
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state logger 1', store.getState());
    console.log('result', result);
    return result;
  }

const logger2 = store => next => action =>{
    console.log('state logger 2', store.getState());
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state logger 2', store.getState());
    console.log('result', result);
    return result;
  }

export const store = createStore(combineReducers({
    app: rootReducer
}),composeWithDevTools(
    applyMiddleware(logger1,logger2)
));

