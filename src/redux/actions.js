import {
  ADD_TASK,
  GET_TASKS,
  CHANGE_PAGE,
  SORT_BY_FIELD,
  TYPE_OF_SORT,
  SHOW_LOGIN,
  LOG_IN,
  LOG_OUT,
  INPUT_USER,
  INPUT_EMAIL,
  INPUT_PASS,
} from './types';

const addTaskAC = (curUser, curEmail, taskName) => async dispatch => {
  try {
    const response = await fetch(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=admin&username=${curUser}&email=${curEmail}&text=${taskName}`,
      {
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
      },
    );
    const myJson = await response.json();
    console.log('----addTaskAC----');
    console.log(`curUser: ${curUser}`);
    console.log(`curEmail: ${curEmail}`);
    console.log(`taskName: ${taskName}`);
    console.log(`Object.keys(myJson): ${Object.keys(myJson)}`);
    console.log(`myJson.status: ${myJson.status}`);
    console.log(`myJson.message.username: ${myJson.message.username}`);
    console.log(`myJson.message.email: ${myJson.message.email}`);
    console.log(`myJson.message.text: ${myJson.message.text}\n`);
    //Object.keys(myJson.message): username,email,text
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
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=admin&sort_field=${sortField}&sort_direction=${sortDirection}&page=${pageN}`,
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

const showLogInAC = () => {
  try {
    return {
      type: SHOW_LOGIN,
    };
  } catch (err) {
    console.log(`Error with showLogInAC: ${err}\n`);
  }
};

const logInAC = (logInUser, logInPass) => async dispatch => {
  try {
    const response = await fetch(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=admin&username=${logInUser}&password=${logInPass}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   username: logInUser,
        //   password: logInPass,
        // }),
      },
    );
    const myJson = await response.json();
    console.log('----logInAC----');
    console.log(`logInUser: ${logInUser}`);
    console.log(`logInPass: ${logInPass}`);
    console.log(`Object.keys(myJson): ${Object.keys(myJson)}`);
    console.log(`myJson.status: ${myJson.status}`);
    console.log(`Object.keys(myJson.message): ${Object.keys(myJson.message)}`);
    //Object.keys(myJson.message): username,password
    console.log(`myJson.message.username: ${myJson.message.username}`);
    console.log(`myJson.message.password: ${myJson.message.password}\n`);
    if (myJson.status === 'ok') {
      dispatch({
        type: LOG_IN,
        title: myJson.message.text,
      });
    }
  } catch (err) {
    console.log(`Error at logInAC: ${err}\n`);
  }
};

const logOutAC = () => {
  try {
    return {
      type: LOG_OUT,
    };
  } catch (err) {
    console.log(`Error with logOutAC: ${err}\n`);
  }
};

const enterUserNameAC = text => {
  try {
    return {
      type: INPUT_USER,
      enterUserName: text,
    };
  } catch (err) {
    console.log(`Error with enterUserNameAC: ${err}\n`);
  }
};

const enterEmailAC = text => {
  try {
    return {
      type: INPUT_EMAIL,
      enterEmail: text,
    };
  } catch (err) {
    console.log(`Error with enterUserNameAC: ${err}\n`);
  }
};

const enterPassAC = text => {
  try {
    return {
      type: INPUT_PASS,
      enterPass: text,
    };
  } catch (err) {
    console.log(`Error with enterPassAC: ${err}\n`);
  }
};

export {
  addTaskAC,
  getTasksAC,
  changePageAC,
  changeSortByFieldAC,
  changeTypeOfSortAC,
  showLogInAC,
  logInAC,
  logOutAC,
  enterUserNameAC,
  enterEmailAC,
  enterPassAC,
};
