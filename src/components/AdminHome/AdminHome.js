import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddItemForm from '../AddItemForm/AddItemForm';

class AdminHome extends Component {
  // componentDidMount fetching inventory list from db
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PRODUCT' });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <AddItemForm />
        
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(AdminHome);
