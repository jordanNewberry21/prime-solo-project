import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InventoryItem from '../InventoryItem/InventoryItem';
import FeaturedItem from '../FeaturedItem/FeaturedItem';

// material-ui
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import useStyles from './styles';


const Inventory = () => {

    // hooks
    const inventory = useSelector((store) => store.inventory);
    const user = useSelector((store) => store.user);
    const classes = useStyles();
    const dispatch = useDispatch();

    const getInventory = useCallback( () => {
      dispatch({ type: 'FETCH_ALL' });
      }, [dispatch]
    ) // had to useCallback here to memoize this function to avoid hook warnings
    // dispatch is needed in the dependency array so it can be passed to useEffect function

    useEffect( () => {
      getInventory(); // this is being called on page load to get the list of items
    }, [getInventory]);
    

    return (
      
      // shows circular loading bar to denote that things are loading
      // if there are no items to be loaded, this lets the user know something is happening
      // if the page is taking a while to load
      <>
        <FeaturedItem user={user} />
        <Typography variant="h3" className={classes.header}>My Store</Typography>
        {!inventory.length ? <CircularProgress /> : (
          <Grid className={classes.mainContainer}
              cols={3}
              container 
              spacing={2}
              direction="row"
              justify="flex-start"
              alignItems="flex-start">
            {inventory.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={3}>
                    <InventoryItem user={user} item={item} />
              </Grid>
            ))}
        </Grid>
      
    )} </>
      
    )
  
}

export default Inventory;
