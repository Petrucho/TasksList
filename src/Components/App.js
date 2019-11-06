import React from 'react';

import TasksListWithCheck from './TasksListWithCheck';
import AddTask from './AddTask';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <TasksListWithCheck />
      <AddTask />
      <Footer />
    </div>
  );
}

export default App;
