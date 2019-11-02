import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskClick from './TaskClick';
import { toggleTaskAC, clearAllAC, getTasks } from '../redux/actions';

class TasksListWithCheck extends Component {
  state = {};

  componentDidMount() {
    this.tasksFetch();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.list.length < this.props.list.length) {
  //     this.tasksFetch();
  //   }
  // }

  async tasksFetch() {
    const somePromise = await this.props.getTasks(this.props.sort_field, this.props.sort_direction, this.props.page);
  }

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
    sort_field: state.sort_field,
    sort_direction: state.sort_direction,
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTask: index => dispatch(toggleTaskAC(index)),
    eraseList: () => dispatch(clearAllAC()),
    getTasks: (sort_field, sort_direction, page) => dispatch(getTasks(sort_field, sort_direction, page)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksListWithCheck);
