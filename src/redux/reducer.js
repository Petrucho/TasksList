import { ADD_TASK, CLEAR_ALL_TASK, TOGGLE_TASK, GET_TASKS } from './types';

const initialState = {
  tasks: [
    {
      title: 'Купить молоко',
      done: false,
    },
    {
      title: 'Погладить кота',
      done: false,
    },
    {
      title: 'Отрастить брови',
      done: true,
    },
  ],
  sort_field: 'id', //(id | username | email | status) - поле, по которому выполняется сортировка
  sort_direction: 'asc', //(asc | desc) - направление сортировки
  page: 1, // номер страницы для пагинации
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
