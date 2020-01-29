import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from '../../types';
import { hawkReducer } from '../reducers';

export interface IAppState {
  hawkState: StoreState;
}

const rootReducer = combineReducers<IAppState>({
  hawkState: hawkReducer
});
const composeEnhancers = composeWithDevTools({});

export default function configureStore(): Store<IAppState, any> {
  const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
