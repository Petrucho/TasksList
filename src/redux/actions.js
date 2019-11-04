import { ADD_TASK, TOGGLE_TASK, CLEAR_ALL_TASK, GET_TASKS } from './types';

const addTaskAC = (curUser, curEmail, taskName) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying ADDING TASK - POST...');
    console.log(`curUser: ${curUser}, curEmail: ${curEmail}, taskName: ${taskName}`);

    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=${curUser}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: curUser,
        email: curEmail,
        text: taskName,
      }),
    });
    const myJson = await response.json();
    console.log('------------------');
    console.log(`Response on ADD NEW TASK: ${myJson}`);
    console.log(`Object.keys(myJson): ${Object.keys(myJson)}`);
    //Object.keys(myJson): status,message
    console.log(`myJson.status: ${myJson.status}`);
    console.log(`myJson.message: ${myJson.message}`);
    console.log(`Object.keys(myJson.message): ${Object.keys(myJson.message)}`);
    console.log(`myJson.message.username: ${myJson.message.username}`);
    console.log(`myJson.message.email: ${myJson.message.email}`);
    console.log(`myJson.message.text: ${myJson.message.text}\n`);

    // const data = myJson.message.tasks;
    if (myJson.status === 'ok') {
      dispatch({
        type: ADD_TASK,
        username: myJson.message.username,
        email: myJson.message.email,
        loadedTasksId: myJson.message.id,
        title: myJson.message.text,
      });
    }
  } catch (err) {
    console.log('-----ERRROR-------------');
    console.log(`Error with ADDING TASK: ${err}\n`);
  }
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

const getTasks = (curUser, sortField, sortDirection, pageN) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying FETCH - GET...');
    console.log(`curUser: ${curUser}, sortField: ${sortField}, sortDirection: ${sortDirection}, pageN: ${pageN}`);

    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${curUser}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const myJson = await response.json();
    console.log('------------------');
    console.log(`Object.keys(myJson): ${Object.keys(myJson)}\n`);
    //Object.keys(myJson): status,message
    console.log(`myJson.status: ${myJson.status}`);
    console.log(`Object.keys(myJson.message): ${Object.keys(myJson.message)}`);
    //Object.keys(myJson.message): tasks,total_task_count
    console.log(`myJson.message.tasks.length: ${myJson.message.tasks.length}`);
    console.log(`myJson.message.total_task_count: ${myJson.message.total_task_count}\n`);
    const data = myJson.message.tasks;
    if (myJson.status === 'ok') {
      dispatch({
        type: GET_TASKS,
        loadedTasks: data,
        totalTasksCount: myJson.message.total_task_count,
      });
    }
  } catch (err) {
    console.log('-----ERRROR-------------');
    console.log(`Error with loading TASKS: ${err}\n`);
  }
};

export { addTaskAC, toggleTaskAC, clearAllAC, getTasks };
