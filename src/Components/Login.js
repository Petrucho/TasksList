import React, { Component } from 'react';
import { connect } from 'react-redux';

import { enterUserNameAC, enterEmailAC, enterPassAC } from '../redux/actions';
import './styleLogin.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
    };
  }

  onChangeUserName = e => {
    // this.setState({ username: e.target.value });
    this.props.enterUserName(e.target.value);
  };

  onChangeEmail = e => {
    // this.setState({ email: e.target.value });
    this.props.enterEmail(e.target.value);
  };

  onChangePass = e => {
    // this.setState({ email: e.target.value });
    this.props.enterPass(e.target.value);
  };

  // onSubmit = () => {
  //   console.log('------------------');
  //   console.log(`onSubmit\n`);
  //   this.props.logUserIn(this.props.currUser, this.props.currEmail);
  //   this.setState({ username: '', email: '' });
  // };

  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <input onChange={this.onChangeUserName} value={this.props.currUser} type="text" placeholder="login" />
          <input onChange={this.onChangeEmail} value={this.props.currEmail} type="text" placeholder="e-mail" />
          <input onChange={this.onChangePass} value={this.props.currPass} type="password" placeholder="password" />
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currUser: state.currUser,
    currEmail: state.currEmail,
    currPass: state.currPass,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // logUserIn: (logInUser, logInEmail) => dispatch(logInAC(logInUser, logInEmail)),
    enterUserName: text => dispatch(enterUserNameAC(text)),
    enterEmail: text => dispatch(enterEmailAC(text)),
    enterPass: text => dispatch(enterPassAC(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
