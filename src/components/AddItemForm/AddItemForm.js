import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

// reduxStore
import mapStoreToProps from '../../redux/mapStoreToProps';

// material-ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

function AddItemForm(props) {
  
  const [postData, setPostData] = useState({ name: '', description: '', price: '', url: '' });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'POST', payload: postData});
    setPostData({ name: '', description: '', price: '', url: '' });
  }

  const clear = () => {
    setPostData({ name: '', description: '', price: '', url: '' });
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add Item to Inventory</Typography>
          <TextField name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
          <TextField name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
          <TextField name="price" variant="outlined" label="Price" fullWidth value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
          <TextField name="url" variant="outlined" label="Image URL" fullWidth value={postData.url} onChange={(e) => setPostData({ ...postData, url: e.target.value })}/>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
              Submit
          </Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
              Clear
          </Button>
      </form>
    </Paper>
  );
}

export default connect(mapStoreToProps)(AddItemForm);
