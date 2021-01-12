import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminPage extends Component {
  // componentDidMount fetching inventory list from db
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_PRODUCT' });
  }
  
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p> ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(AdminPage);
