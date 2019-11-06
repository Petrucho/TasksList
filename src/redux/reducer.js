import { ADD_TASK, CLEAR_ALL_TASK, TOGGLE_TASK, GET_TASKS, CHANGE_PAGE } from './types';

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
  console.log(`----REDUCER----`);
  console.log(`before SWITCH`);
  console.log(`Object.keys(action): ${Object.keys(action)}`);
  console.log(`action.type: ${action.type}`);
  switch (action.type) {
    case ADD_TASK: {
      return {
        tasks: [...state.tasks, { title: action.title, done: false }],
      };
    }

    case CLEAR_ALL_TASK: {
      return {
        tasks: [],
      };
    }

    case TOGGLE_TASK: {
      const tasks = [...state.tasks];

      tasks.forEach((el, index) => {
        if (index === action.index) {
          el.done = !el.done;
        }
      });
      console.log('-------REDUCER-------');
      console.log('TOGGLE_TASK PAGE');
      console.log(`action.index: ${action.index}\n`);
      return {
        tasks: tasks,
      };
    }

    case GET_TASKS: {
      console.log('-------REDUCER-------');
      console.log('GET_TASKS');
      console.log(`action.loadedTasks: ${action.loadedTasks}\n`);
      console.log(`action.totalTasksCount: ${action.totalTasksCount}\n`);
      return {
        ...state,
        tasks: action.loadedTasks,
        totalTasksCount: action.totalTasksCount,
      };
    }

    case CHANGE_PAGE: {
      console.log('-------REDUCER-------');
      console.log('CHANGING PAGE');
      console.log(`action.currPage: ${action.currPage}\n`);
      return {
        ...state,
        currPage: action.currPage,
      };
    }
    default:
      return state;
  }
}
