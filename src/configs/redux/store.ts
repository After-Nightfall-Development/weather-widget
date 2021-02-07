import {
  Store,
  combineReducers,
  applyMiddleware,
  createStore as originalCreateStore,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import application, { ApplicationState } from '../../reducers/application';

export const createStore = (): Store => {
  const createStoreFunc = applyMiddleware(thunkMiddleware)(originalCreateStore),
    allReducers = combineReducers({
      applicationState: application.reducer,
    });

  return createStoreFunc(allReducers, {
    applicationState: ({} as unknown) as ApplicationState,
  });
};

export interface State {
  applicationState: ApplicationState;
}
