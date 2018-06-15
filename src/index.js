import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();