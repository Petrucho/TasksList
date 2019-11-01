import { ADD_TASK, CLEAR_ALL_TASK, TOGGLE_TASK } from './types';

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

    default:
      return state;
  }
}
