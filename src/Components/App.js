import React from 'react';

import TasksListWithCheck from './TasksListWithCheck';
import AddTask from './AddTask';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <TasksListWithCheck />
      <AddTask />
      <Footer />
    </div>
  );
}

export default App;
