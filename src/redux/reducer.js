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

const initialState = {
  tasks: [],
  sort_field: 'id', //(id | username | email | status) - поле, по которому выполняется сортировка
  sort_direction: 'asc', //(asc | desc) - направление сортировки
  currPage: 1, // номер страницы для пагинации
  totalTasksCount: 0,
  currUser: '',
  currEmail: '',
  currPass: '',
  pagination: 3,
  showLogin: true,
  loggedIn: false,
  authToken: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks: [...state.tasks, { title: action.title, done: false }],
      };
    }

    case GET_TASKS: {
      return {
        ...state,
        tasks: action.loadedTasks,
        totalTasksCount: action.totalTasksCount,
      };
    }

    case CHANGE_PAGE: {
      return {
        ...state,
        currPage: action.currPage,
      };
    }

    case SORT_BY_FIELD: {
      return {
        ...state,
        sort_field: action.sort_field,
      };
    }

    case TYPE_OF_SORT: {
      return {
        ...state,
        sort_direction: action.sort_direction,
      };
    }

    case SHOW_LOGIN: {
      return {
        ...state,
        showLogin: true,
      };
    }

    case LOG_IN: {
      return {
        ...state,
        currUser: action.userName,
        loggedIn: true,
        showLogin: false,
      };
    }

    case LOG_OUT: {
      return {
        ...state,
        currUser: '',
        currEmail: '',
        loggedIn: false,
      };
    }

    case INPUT_USER: {
      return {
        ...state,
        currUser: action.enterUserName,
      };
    }

    case INPUT_EMAIL: {
      return {
        ...state,
        currEmail: action.enterEmail,
      };
    }

    case INPUT_PASS: {
      return {
        ...state,
        currPass: action.enterPass,
      };
    }

    default:
      return state;
  }
}
