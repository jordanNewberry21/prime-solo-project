import React from 'react';


const Total = ({cart}) => {
  

  return (
    <>
      <p>
        $ {cart.reduce((sum, item) => (
          sum += item.quantity * item.price
        ), 0)}
      </p>
    </>
  );
}

export default Total;
