import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTaskAC } from '../redux/actions';

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = e => {
    this.setState({ title: e.target.value });
  };

  onSubmit = () => {
    this.props.addTask(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="AddTask">
        <input onChange={this.onChange} value={this.state.title} />
        <button onClick={this.onSubmit}>Добавить задачу</button>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addTask: taskName => dispatch(addTaskAC(taskName)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTask);
