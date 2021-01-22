import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useSelector, useDispatch } from 'react-redux';
import InventoryItem from '../InventoryItem/InventoryItem';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';


function FeaturedItem(props) {
  
    // hooks
    const featuredItems = useSelector((store) => store.feature);
    const user = props.user;
    const classes = useStyles();

    return (
        <div className={classes.carousel}>
            <h2 className={classes.header}>Featured Items</h2>
            <Carousel 
                next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
                prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }>
                
                {
                    featuredItems.map((item) => 
                        <Paper>
                            <InventoryItem key={item.id} item={item} user={user} />
                        </Paper>)
                }
            </Carousel>
        </div>
    );
}

export default connect(mapStoreToProps)(FeaturedItem);
