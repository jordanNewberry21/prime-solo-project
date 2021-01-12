import React, { Component } from 'react';
import { connect } from 'react-redux';

// reduxStore
import mapStoreToProps from '../../redux/mapStoreToProps';





class AdminInventory extends Component {

  render() {
    return (
      <div>
        <p>Admin Inventory Page</p>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(AdminInventory);
