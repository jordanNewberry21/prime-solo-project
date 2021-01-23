import React from 'react';


const Total = ({cart}) => {
  
  // cart is being passed in as props here from where ever this
  // component is being used.

  return (
    <>
    {/* lots of crazy math happening here to keep a running total
    and to make sure there are only two decimal places */}
      <p>
        $ {(Math.round(100*(cart.reduce((sum, item) => (
          sum += Number(item.price)
        ), 0)))) / 100}
      </p>
    </>
  );
}

export default Total;
