import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

// reduxStore
import mapStoreToProps from '../../redux/mapStoreToProps';

// material-ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

function AddItemForm(props) {
  // postData hook
  const [postData, setPostData] = useState({ name: '', description: '', price: '', url: '' });

  // material-ui classes
  const classes = useStyles();

  // dispatch hook
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'POST', payload: postData}); // dispatching new post item to inventory.saga
    setPostData({ name: '', description: '', price: '', url: '' }); // clears inputs
  }

  const clear = () => {
    setPostData({ name: '', description: '', price: '', url: '' });
  }

  return (
    <Paper variant="outlined" elevation={3} className={`${classes.paper} ${classes.root}`}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add Item to Inventory</Typography>
          <TextField fullWidth name="name" variant="outlined" label="Name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
          <TextField fullWidth name="description" variant="outlined" label="Description" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
          <TextField fullWidth name="price" variant="outlined" label="Price" value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
          <TextField fullWidth name="url" variant="outlined" label="Image URL" value={postData.url} onChange={(e) => setPostData({ ...postData, url: e.target.value })}/>
          <Button fullWidth className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >
              Submit
          </Button>
          <Button fullWidth variant="contained" color="secondary" size="small" onClick={clear} >
              Clear
          </Button>
      </form>
    </Paper>
  );
}

export default connect(mapStoreToProps)(AddItemForm);
