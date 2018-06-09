import React from 'react';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const store = createStore(tasksReducer);

function renderApp() {
  render(
    <TodoApp store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp());
renderApp(store);

registerServiceWorker();