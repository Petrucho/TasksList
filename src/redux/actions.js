import { ADD_TASK, GET_TASKS, CHANGE_PAGE, SORT_BY_FIELD, TYPE_OF_SORT } from './types';

const addTaskAC = (curUser, curEmail, taskName) => async dispatch => {
  try {
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
    console.log(`Error with ADDING TASK: ${err}\n`);
  }
};


const getTasksAC = (curUser, sortField, sortDirection, pageN) => async dispatch => {
  try {
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
    const data = myJson.message.tasks;
    if (myJson.status === 'ok') {
      dispatch({
        type: GET_TASKS,
        loadedTasks: data,
        totalTasksCount: myJson.message.total_task_count,
      });
    }
  } catch (err) {
    console.log(`Error with loading TASKS: ${err}\n`);
  }
};

const changePageAC = pageNumber => {
  try {
    return {
      type: CHANGE_PAGE,
      currPage: pageNumber,
    };
  } catch (err) {
    console.log(`Error with CHANGING PAGE: ${err}\n`);
  }
};

const changeSortByFieldAC = sortField => {
  try {
    return {
      type: SORT_BY_FIELD,
      sort_field: sortField,
    };
  } catch (err) {
    console.log(`Error with SORTING BY FIELD: ${err}\n`);
  }
};

const changeTypeOfSortAC = sortDirection => {
  try {
    return {
      type: TYPE_OF_SORT,
      sort_direction: sortDirection,
    };
  } catch (err) {
    console.log(`Error with TYPE OF SORT: ${err}\n`);
  }
};

export { addTaskAC, getTasksAC, changePageAC, changeSortByFieldAC, changeTypeOfSortAC };
