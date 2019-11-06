import React, { Component } from 'react';
import { connect } from 'react-redux';

import TaskClick from './TaskClick';
import { toggleTaskAC, clearAllAC, getTasksAC } from '../redux/actions';

class TasksListWithCheck extends Component {
  state = {};

  componentDidMount() {
    console.log('-------TasksListWithCheck-------');
    console.log(`componentDidMount\n`);
    this.tasksFetch();
  }

  componentDidUpdate(prevProps) {
    console.log('-------TasksListWithCheck-------');
    console.log('componentDidUpdate');
    console.log(`Object.keys(prevProps): ${Object.keys(prevProps)}\n`);
    console.log(`prevProps.currPage: ${prevProps.currPage}`);
    console.log(`this.props.currPage: ${this.props.currPage}\n`);
    if ((prevProps.currPage !== this.props.currPage) || (prevProps.sort_field !== this.props.sort_field)||(prevProps.sort_direction !== this.props.sort_direction)) {
      console.log('run tasksFetch function\n');
      this.tasksFetch();
    }
  }

  tasksFetch() {
    const somePromise = this.props.getTasks(
      this.props.currUser,
      this.props.sort_field,
      this.props.sort_direction,
      this.props.currPage,
    );
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    sort_field: state.sort_field,
    sort_direction: state.sort_direction,
    currPage: state.currPage,
    currUser: state.currUser,
    currEmail: state.currEmail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTask: index => dispatch(toggleTaskAC(index)),
    eraseList: () => dispatch(clearAllAC()),
    getTasks: (curUser, sort_field, sort_direction, page) =>
      dispatch(getTasksAC(curUser, sort_field, sort_direction, page)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksListWithCheck);
