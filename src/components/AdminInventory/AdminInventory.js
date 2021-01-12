import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InventoryItem from '../InventoryItem/InventoryItem';

// material-ui
import { Grid, CircularProgress } from '@material-ui/core';
import makeStyles from './styles';





const AdminInventory = ({ setCurrentId }) => {
  
    const inventory = useSelector((store) => store.inventory);
    const classes = makeStyles();
    const dispatch = useDispatch();

    const getInventory = useCallback( () => {
      dispatch({ type: 'FETCH_PRODUCT' });
      }, [dispatch]
    )

    useEffect( () => {
      getInventory();
    }, [getInventory]);
    

    return (
      
      // shows circular loading bar to denote that things are loading
      // if there are no items to be loaded
      !inventory.length ? <CircularProgress /> : (
        <Grid className={classes.mainContainer} container  spacing={3}>
            {inventory.map((item) => (
                <Grid key={item.id} item xs={12} sm={6}>
                    <InventoryItem item={item} />
                </Grid>
            ))}
            {/* <p>{JSON.stringify(inventory)}</p> */}
        </Grid>
    )
      
    )
  
}

export default AdminInventory;
