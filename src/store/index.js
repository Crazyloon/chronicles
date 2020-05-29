import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({

  }),
  applyMiddleware(createlogger(), sagaMiddleware)
);

for (let saga in sagas){
  sagaMiddleware.run(sagas[saga]);
}