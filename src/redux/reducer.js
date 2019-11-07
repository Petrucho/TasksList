import { ADD_TASK,  GET_TASKS, CHANGE_PAGE, SORT_BY_FIELD, TYPE_OF_SORT } from './types';

const initialState = {
  tasks: [],
  sort_field: 'id', //(id | username | email | status) - поле, по которому выполняется сортировка
  sort_direction: 'asc', //(asc | desc) - направление сортировки
  currPage: 1, // номер страницы для пагинации
  totalTasksCount: 0,
  currUser: 'admin',
  currEmail: 'example@example.com',
  pagination: 3,
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

    default:
      return state;
  }
}
