import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import configureStore, { IAppState } from './redux/store';
import { getAllHawks } from './redux/actions';
import './index.css';
import App from './App';

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

const store = configureStore();
store.dispatch(getAllHawks());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
