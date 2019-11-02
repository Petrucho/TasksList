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

const getTasks = (sortField, sortDirection, pageN) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying FETCH - GET...');
    console.log(`sortField: ${sortField}, sortDirection: ${sortDirection}, pageN: ${pageN}`);

    const response = await fetch(
      'https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Petrucho&sort_field=sortField&sort_direction=sortDirection&page=pageN',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const myJson = await response.json();
    console.log('------------------');
    console.log(`myJson: ${myJson}`);
    console.log(`Object.keys(myJson): ${Object.keys(myJson)}\n`);
    //Object.keys(myJson): status,message
    console.log(`Object.keys(myJson.status): ${Object.keys(myJson.status)}`);
    //Object.keys(myJson.status): 0,1
    console.log(`Object.keys(myJson.message): ${Object.keys(myJson.message)}`);
    //Object.keys(myJson.message): tasks,total_task_count
    console.log(`myJson.message.tasks.length: ${myJson.message.tasks.length}`);
    console.log(`Object.keys(myJson.message.tasks): ${Object.keys(myJson.message.tasks)}`);
    console.log(`Object.keys(myJson.message.total_task_count): ${Object.keys(myJson.message.total_task_count)}`);
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
