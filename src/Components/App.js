import React from 'react';

import TasksListWithCheck from './TasksListWithCheck'
import AddTask from './AddTask'

function App() {
  return (
    <div className="App">
      <TasksListWithCheck />
      <AddTask />
    </div>
  );
}

export default App;
