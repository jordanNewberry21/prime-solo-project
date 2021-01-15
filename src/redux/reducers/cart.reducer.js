const cart = (state = [], action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.payload]
      default:
        return state;
    }
  };
  
  // inventory will be on the redux state at:
  // state.inventory
  export default cart;