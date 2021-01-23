import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddItemForm from '../AddItemForm/AddItemForm';


class AdminHome extends Component {
  // Admin home page
  render() {

    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <AddItemForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminHome);
