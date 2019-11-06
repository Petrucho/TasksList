import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changePageAC, changeSortByFieldAC, changeTypeOfSortAC } from '../redux/actions';

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

  onClickSortByField = e => {
    console.log('------------------');
    console.log(`some sorting button clicked: ${e.target.innerText}`);
    switch (e.target.innerText) {
      case 'Sort by ID':
        this.props.changeSortByField('id');
        break;
      case 'Sort by username':
        this.props.changeSortByField('username');
        break;
      case 'Sort by email':
        this.props.changeSortByField('email');
        break;
      case 'Sort by status':
        this.props.changeSortByField('status');
        break;
      default:
        this.props.changeSortByField('id');
    }
  };

  onClickTypeOfSort = e => {
    console.log('------------------');
    console.log(`some type of sort button clicked: ${e.target.innerText}`);
    switch (e.target.innerText) {
      case 'ASC':
        this.props.changeTypeOfSort('asc');
        break;
      case 'DESC':
        this.props.changeTypeOfSort('desc');
        break;
      default:
        this.props.changeTypeOfSort('asc');
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
        <div className="SortingField">
          <p>Current sorting field: {this.props.sort_field}</p>
          <button onClick={this.onClickSortByField}>Sort by ID</button>
          <button onClick={this.onClickSortByField}>Sort by username</button>
          <button onClick={this.onClickSortByField}>Sort by email</button>
          <button onClick={this.onClickSortByField}>Sort by status</button>
        </div>
        <div className="SortingType">
          <p>Type of sorting: {this.props.sort_direction}</p>
          <button onClick={this.onClickTypeOfSort}>ASC</button>
          <button onClick={this.onClickTypeOfSort}>DESC</button>
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
    sort_field: state.sort_field,
    sort_direction: state.sort_direction,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: pageNumber => dispatch(changePageAC(pageNumber)),
    changeSortByField: sortField => dispatch(changeSortByFieldAC(sortField)),
    changeTypeOfSort: sortDirection => dispatch(changeTypeOfSortAC(sortDirection)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer);
