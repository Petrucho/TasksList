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
    console.log('------------------');
    console.log(`onSubmit\n`);
    //имя “test”, email “test@test.com”, текст “test job”
    this.props.addTask('test', 'test@test.com', 'test job');
    // this.props.addTask(this.props.currUser, this.props.currEmail, this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div className="AddTask">
        <input onChange={this.onChange} value={this.state.title} />
        <button onClick={this.onSubmit}>Append task</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currUser: state.currUser,
    currEmail: state.currEmail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (curUser, curEmail, taskName) => dispatch(addTaskAC(curUser, curEmail, taskName)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddTask);
