import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { logInAC, showLogInAC, logOutAC } from '../redux/actions';
import Login from './Login';

class Header extends Component {
  //  state = {};
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup,
    });
    this.state.showPopup && this.props.logUserIn(this.props.currUser, this.props.currPass);
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.togglePopup.bind(this)}>Login</button>
        <p>currUser: {this.props.currUser}</p>
        <p>currEmail: {this.props.currEmail}</p>
        <p>currPass: {this.props.currPass}</p>
        {this.state.showPopup ? <Login text="Close Me" closePopup={this.togglePopup.bind(this)} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currUser: state.currUser,
    currEmail: state.currEmail,
    currPass: state.currPass,
    loggedIn: state.loggedIn,
    showLogin: state.showLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logUserIn: (logInUser, logInPass) => dispatch(logInAC(logInUser, logInPass)),
    showlogIn: () => dispatch(showLogInAC()),
    logOut: () => dispatch(logOutAC()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
