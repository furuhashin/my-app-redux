import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {ConnectedRouter} from 'react-router-redux'
import { Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import App from "./App";
import Error from "./components/Error";

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={TodoApp} />
        <Route exact path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();