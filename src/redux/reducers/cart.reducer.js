const cart = (state = [], action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload];
      case 'REMOVE':
        return state.filter(e => action.payload !== e.id);
      default:
        return state;
    }
  };
  
  // inventory will be on the redux state at:
  // state.inventory
  export default cart;