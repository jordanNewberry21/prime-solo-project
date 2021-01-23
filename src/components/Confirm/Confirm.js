import React from 'react';
import { useSelector } from 'react-redux';


const Confirm = () => {

    // hooks
    const user = useSelector((store) => store.user);

    return (
        <div>
            <h2 style={{ textAlign: 'center', color: 'slateblue' }}>
                Thank you so much for your order {user.first_name}!
            </h2>
        </div>
      
    )
  
}

export default Confirm;
