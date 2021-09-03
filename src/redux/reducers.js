const reducers = (state = {cartItems: []}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;
      const existItem = state.cartItems.find(x => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x._id === existItem._id ? item : x,
          ),
          // count: state.count + 1,
          // cartItems: [...state.cartItems, state.count + 1],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          // count: +1,
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem._id !== action.payload._id,
        ),
      };
    default:
      return state;
  }
};

export default reducers;
