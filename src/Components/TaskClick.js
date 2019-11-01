import React, {Component} from 'react';

class TaskClick extends Component {
  render() {
    const {task, index} = this.props;
    return (
      <div className="Task" onClick={this.props.onClick}>
        {index} - {task.title} {task.done && 'Дело сделано!'}
      </div>
    );
  }
}

export default TaskClick;
