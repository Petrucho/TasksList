import { ADD_TASK, TOGGLE_TASK, CLEAR_ALL_TASK, GET_TASKS, CHANGE_PAGE, SORT_BY_FIELD, TYPE_OF_SORT } from './types';

const addTaskAC = (curUser, curEmail, taskName) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying ADDING TASK - POST...');
    console.log(`curUser: ${curUser}, curEmail: ${curEmail}, taskName: ${taskName}\n`);

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
  console.log('-------ACTION-------');
  console.log('toggleTaskAC');
  console.log(`index: ${index}\n`);
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

const getTasksAC = (curUser, sortField, sortDirection, pageN) => async dispatch => {
  try {
    console.log('-----------------------');
    console.log('trying FETCH - GET...');
    console.log(`curUser: ${curUser}, sortField: ${sortField}, sortDirection: ${sortDirection}, pageN: ${pageN}`);

    const response = await fetch(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${curUser}&sort_field=${sortField}&sort_direction=${sortDirection}&page=${pageN}`,
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
    // console.log(`Object.keys(myJson): ${Object.keys(myJson)}\n`);
    //Object.keys(myJson): status,message
    console.log(`myJson.status: ${myJson.status}`);
    // console.log(`Object.keys(myJson.message): ${Object.keys(myJson.message)}`);
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

const changePageAC = pageNumber => {
  try {
    console.log('-------ACTION-------');
    console.log('trying CHANGING PAGE');
    console.log(`pageNumber: ${pageNumber}\n`);
    return {
      type: CHANGE_PAGE,
      currPage: pageNumber,
    };
  } catch (err) {
    console.log('------ERRROR-------');
    console.log(`Error with CHANGING PAGE: ${err}\n`);
  }
};

const changeSortByFieldAC = sortField => {
  try {
    console.log('-------ACTION-------');
    console.log('trying sorting by field');
    console.log(`sortField: ${sortField}\n`);
    return {
      type: SORT_BY_FIELD,
      sort_field: sortField,
    };
  } catch (err) {
    console.log('------ERRROR-------');
    console.log(`Error with SORTING BY FIELD: ${err}\n`);
  }
};

const changeTypeOfSortAC = sortDirection => {
  try {
    console.log('-------ACTION-------');
    console.log('trying type of sort');
    console.log(`sortDirection: ${sortDirection}\n`);
    return {
      type: TYPE_OF_SORT,
      sort_direction: sortDirection,
    };
  } catch (err) {
    console.log('------ERRROR-------');
    console.log(`Error with TYPE OF SORT: ${err}\n`);
  }
};

export { addTaskAC, toggleTaskAC, clearAllAC, getTasksAC, changePageAC, changeSortByFieldAC, changeTypeOfSortAC };
