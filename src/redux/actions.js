import { ADD_TASK, TOGGLE_TASK, CLEAR_ALL_TASK, GET_TASKS } from './types';

const addTaskAC = taskName => {
  return {
    type: ADD_TASK,
    title: taskName,
  };
};

const toggleTaskAC = index => {
  return {
    type: TOGGLE_TASK,
    index: index,
  };
};

const clearAllAC = () => {
  return {
    type: CLEAR_ALL_TASK,
  };
};

const getTasks = (sort_field, sort_direction, page) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying FETCH - GET...');
    console.log();
    
    const response = await fetch(
      'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Petrucho?sort_field?sort_direction?page',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Cache: 'no-cache',
          credentials: 'same-origin',
          // Cookie: `connect.sid=${cookies}`,

          // crossDomain: true,
          //X-Permitted-Cross-Domain-Policies

          // method: 'POST',
          // mimeType: 'multipart/form-data',
          // contentType: false,
          // processData: false,
          // data: form,
          // dataType: 'json',
        },
      },
    );
    const myJson = await response.json();
    console.log('------------------');
    console.log(`myJson: ${myJson}`);
    console.log(`Object.keys(myJson[0]): ${Object.keys(myJson[0])}\n`);
    // Object.keys(myJson[0]): id,familyName,Todos
    // console.log(`Object.keys(myJson[0].Todos): ${Object.keys(myJson[0].Todos)}`);
    // console.log(`Object.keys(myJson[0].Todos[0]): ${Object.keys(myJson[0].Todos[0])}\n`);
    const data = myJson;
    dispatch({
      type: GET_TASKS,
      loadedTasks: data,
      totalTasksCount: myJson[0].id,
    });
  } catch (err) {
    console.log('------------------');
    console.log(`Error with loading TASKS: ${err}\n`);
  }
};

export { addTaskAC, toggleTaskAC, clearAllAC, getTasks };
