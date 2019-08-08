import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../reducers';

const logger = createLogger();
export const store = createStore(
  rootReducer,
  applyMiddleware(
    reduxThunk,
    logger,
  ),
);
