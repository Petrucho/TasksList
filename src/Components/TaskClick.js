import React, { Component } from 'react';

class TaskClick extends Component {
  render() {
    const { task, index } = this.props;
    return (
      <div className="Task" onClick={this.props.onClick}>
        {index} - id:{task.id} username:{task.username} email:{task.email} text:{task.text} status:
        {task.status}
      </div>
    );
  }
}

export default TaskClick;
