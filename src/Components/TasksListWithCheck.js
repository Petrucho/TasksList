import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskClick from './TaskClick';
import { toggleTaskAC, clearAllAC } from '../redux/actions';

class TasksListWithCheck extends Component {
  onClick = () => {
    this.props.eraseList();
  };

  render() {
    return (
      <div className="App">
        {this.props.tasks.map((task, i) => (
          <TaskClick task={task} index={i + 1} key={i} onClick={() => this.props.toggleTask(i)} />
        ))}
        <button onClick={this.onClick}>Очистить список</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTask: index => dispatch(toggleTaskAC(index)),
    eraseList: () => dispatch(clearAllAC()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksListWithCheck);
