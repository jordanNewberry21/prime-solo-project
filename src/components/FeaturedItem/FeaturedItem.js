import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useSelector, useDispatch } from 'react-redux';
import InventoryItem from '../InventoryItem/InventoryItem';

// material-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';


function FeaturedItem(props) {
  
    // hooks
    const featuredItems = useSelector((store) => store.feature);
    const user = props.user;
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2" className={classes.header}>Featured Items</Typography>
                <Carousel className={classes.carousel}>
                    
                    {
                        featuredItems.map((item) => 
                                <InventoryItem key={item.id} item={item} user={user} />
                            )
                    }
                </Carousel>
        </div>
    );
}

export default connect(mapStoreToProps)(FeaturedItem);

