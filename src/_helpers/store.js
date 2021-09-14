import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {authenticationReducer} from '../_reducers/auth_reducer'
import {registrationReducer} from '../_reducers/registration_reducer'
import {alertReducer} from '../_reducers/alert_reducer'
import { operationReducer } from '../_reducers/operation_reducer';
const loggerMiddleware = createLogger();

function combineReducers(reducers) {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
}

const rootReducer  = combineReducers(
    {
        alert: alertReducer,
        auth: authenticationReducer,
        registration: registrationReducer,
        operation: operationReducer
    }
)

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);