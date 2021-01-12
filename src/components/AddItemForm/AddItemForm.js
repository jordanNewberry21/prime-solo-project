import React, { useState } from 'react';
import { connect } from 'react-redux';

// reduxStore
import mapStoreToProps from '../../redux/mapStoreToProps';

// material-ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';

function AddItemForm(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const [postData, setPostData] = useState({ name: '', description: '', price: '', imgUrl: ''});

  return (
    <div>
      <h2>{heading}</h2>
    </div>
  );
}

export default connect(mapStoreToProps)(AddItemForm);
