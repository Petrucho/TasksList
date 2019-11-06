import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePageAC } from '../redux/actions';

class Footer extends Component {
  state = {};

  onClick = e => {
    console.log('------------------');
    console.log(`some button clicked: ${e.target.innerText}`);
    switch (e.target.innerText) {
      case 'First page':
        console.log('case First page');
        this.props.changePage(1);
        break;
      case 'Prev page':
        console.log('case Prev page');
        if (this.props.currPage > 1) {
          console.log(`this.props.currPage: ${this.props.currPage}`);
          console.log(`this.props.currPage-1: ${this.props.currPage - 1}`);
          this.props.changePage(this.props.currPage - 1);
        }
        break;
      case 'Next page':
        console.log('case Next page');
        console.log(
          `this.props.totalTasksCount / this.props.pagination: ${this.props.totalTasksCount / this.props.pagination}`,
        );
        console.log(`this.props.currPage + 1: ${this.props.currPage + 1}`);

        if (Math.ceil(this.props.totalTasksCount / this.props.pagination) >= this.props.currPage + 1) {
          console.log('run this.props.changePage(this.props.currPage + 1)');
          this.props.changePage(this.props.currPage + 1);
        }
        break;
      case 'Last page':
        console.log('case Last page');
        if (this.props.currPage < Math.ceil(this.props.totalTasksCount / this.props.pagination)) {
          this.props.changePage(Math.ceil(this.props.totalTasksCount / this.props.pagination));
        }
        break;
      default:
        this.props.changePage(1);
    }
  };

  render() {
    return (
      <div className="Footer">
        <div className="Buttons">
          <p>Current page {this.props.currPage}</p>
          <button onClick={this.onClick}>First page</button>
          <button onClick={this.onClick}>Prev page</button>
          <button onClick={this.onClick}>Next page</button>
          <button onClick={this.onClick}>Last page</button>
        </div>
        <div className="Sorting">
          <p>
            Sort by field
            <input list="field" />
          </p>
          <datalist id="field">
            <option>id</option>
            <option>username</option>
            <option>email</option>
            <option>status</option>
          </datalist>
          <p>
            Type of sort
            <input list="type" />
          </p>
          <datalist id="type">
            <option>asc</option>
            <option>desc</option>
          </datalist>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currPage: state.currPage,
    totalTasksCount: state.totalTasksCount,
    pagination: state.pagination,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: pageNumber => dispatch(changePageAC(pageNumber)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
