import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// material-ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

// de-constructing props to harness IDs for edit mode
function AddItemForm(props) {
  // postData hook
  const [postData, setPostData] = useState({ name: '', description: '', price: '', image: '' });

  // material-ui classes
  const classes = useStyles();

  // dispatch hook
  const dispatch = useDispatch();

  // I passed this prop down from the InventoryItem component, through the Dialog component
  // I'm storing it here to set the state when I click the edit button
  const itemToUpdate = props.itemToUpdate;

  // clicking the edit button triggers this useEffect
  useEffect(() => {
    if(itemToUpdate) setPostData(itemToUpdate);
  }, [itemToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemToUpdate) {
      dispatch({ type: 'UPDATE', payload: postData }) // dispatching updated item to inventory.saga
      props.handleClose(); // closes dialog window if open
    } else {
      dispatch({ type: 'POST', payload: postData }); // dispatching new post item to inventory.saga
    }
    clear(); // clears inputs
  }

  const clear = () => { // clears input fields
    setPostData({ name: '', description: '', price: '', image: '' });
  }

  return (
    <Paper variant="outlined" elevation={3} className={`${classes.paper} ${classes.root}`}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add Item to Inventory</Typography>
          <TextField 
            required 
            fullWidth 
            name="name" 
            variant="outlined" 
            label="Name" 
            value={postData.name} 
            onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
          <TextField 
            required 
            fullWidth 
            name="description" 
            variant="outlined" 
            label="Description" 
            value={postData.description} 
            onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
          <TextField 
            required 
            fullWidth 
            name="price" 
            variant="outlined" 
            label="Price" 
            value={postData.price} 
            onChange={(e) => setPostData({ ...postData, price: e.target.value })}/>
          <TextField 
          required 
          fullWidth 
          name="image" 
          variant="outlined" 
          label="Image URL" 
          value={postData.image} 
          onChange={(e) => setPostData({ ...postData, image: e.target.value })}/>
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

export default AddItemForm;
