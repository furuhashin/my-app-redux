import {connect} from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import {inputTask, addTask} from "../actions/tasks";

//storeを第一引数にとる
function mapStateToProps({tasks}) {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputTask(task) {
      dispatch(inputTask(task));
    },
    addTask(task) {
      dispatch(addTask(task));
    },
    redirectToError() {
      dispatch(push('/error'));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);