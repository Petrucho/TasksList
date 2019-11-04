import { ADD_TASK, CLEAR_ALL_TASK, TOGGLE_TASK, GET_TASKS } from './types';

const initialState = {
  tasks: [],
  // tasks: [
  //   {
  //     id: 1,
  //     username: 'Test User',
  //     email: 'test_user_1@example.com',
  //     text: 'Hello, world!',
  //     status: 10,
  //   },
  //   {
  //     id: 3,
  //     username: 'Test User 2',
  //     email: 'test_user_2@example.com',
  //     text: 'Hello from user 2!',
  //     status: 0,
  //   },
  //   {
  //     id: 4,
  //     username: 'Test User 3',
  //     email: 'test_user_3@example.com',
  //     text: 'Hello from user 3!',
  //     status: 0,
  //   },
  // ],
  sort_field: 'id', //(id | username | email | status) - поле, по которому выполняется сортировка
  sort_direction: 'asc', //(asc | desc) - направление сортировки
  page: 1, // номер страницы для пагинации
  currUser: 'admin',
  currEmail: 'example@example.com',
};

export default function(state = initialState, action) {
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

      return {
        tasks: tasks,
      };
    }

    case GET_TASKS: {
      return {
        ...state,
        tasks: action.loadedTasks,
        totalTasksCount: action.totalTasksCount,
      };
    }

    default:
      return state;
  }
}
