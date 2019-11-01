import {ADD_TASK, TOGGLE_TASK, CLEAR_ALL_TASK} from './types'

const addTaskAC = (taskName) => {
  return {
    type: ADD_TASK,
    title: taskName
  }
};

const toggleTaskAC = (index) => {
  return {
    type: TOGGLE_TASK,
    index: index
  }
};


const clearAllAC = () => {
  return {
    type: CLEAR_ALL_TASK
  }
};


export { addTaskAC, toggleTaskAC, clearAllAC };
