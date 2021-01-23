import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';

// components
import InventoryItem from '../InventoryItem/InventoryItem';

// material-ui
import Typography from '@material-ui/core/Typography';
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
                    {/* This component is controlled by the admin
                    It lives on the main store page, but it's populated 
                    by the admin clicking the Feature Item button when viewing 
                    their inventory */}
                    {
                        featuredItems.map((item) => 
                                <InventoryItem key={item.id} item={item} user={user} />
                            )
                    }
                </Carousel>
        </div>
    );
}

export default FeaturedItem;

