const cart = (state = [], action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
      case 'REMOVE':
        return state.filter(e => action.payload !== e.id);
      case 'CLEAR_CART':
        return [];
      default:
        return state;
    }
  };
  
  // cart will be on the redux state at:
  // state.cart
  export default cart;