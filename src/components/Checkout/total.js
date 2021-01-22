import React from 'react';


const Total = ({cart}) => {
  

  return (
    <>
      <p>
        $ {(Math.round(100*(cart.reduce((sum, item) => (
          sum += Number(item.price)
        ), 0)))) / 100}
      </p>
    </>
  );
}

export default Total;
