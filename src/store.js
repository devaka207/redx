import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {UPDATE_COUNT} from '../src/types';
import appreducer from '../src/appreducer';

const countEpic = action$ =>
  action$
    .pipe(
      filter(action => action.type === UPDATE_COUNT),
      map(action => {
        return {
          type: UPDATE_COUNT,
          payload: {
          },
        };
      }),
    )
    .subscribe(action => dispatch(action));

const epicMiddleware = createEpicMiddleware();
const rootReducer = combineReducers({
  appreducer:appreducer
});

const logger = createLogger({
  duration: true,
});
const middlewares = [thunk, logger, epicMiddleware];
const configureStore = () =>
  createStore(rootReducer, applyMiddleware(...middlewares));
epicMiddleware.run(countEpic);
export default configureStore;    