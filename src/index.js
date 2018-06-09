import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

const initialState = {
  task: '',
  tasks: []
};

function tasksReducer(state = initialState, action) {
  switch(action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function resetReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TASK' :
      return {
        ...state,
        tasks: []
      };
    default :
      return state;
  }
}


const store = createStore(tasksReducer);

const addTask = (task) => ({
  type:'ADD_TASK',
  payload: {
    task
  }
});
const inputTask = (task) => ({
  type:'INPUT_TASK',
  payload: {
    task
  }
});

const resetTask = () => ({
  type: 'RESET_TASK'
});

function TodoApp({ store }) {
  const {task, tasks} = store.getState();
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      <ul>
        {
          tasks.map(function(item,i) {
            return (
              <li key={i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  )
}

function renderApp() {
  render(
    <TodoApp store={store}/>,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp());
renderApp(store);

registerServiceWorker();