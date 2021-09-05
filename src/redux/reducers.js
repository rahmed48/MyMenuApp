const initialState = {cartItems: []};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const count = 1;
      const item = action.payload;
      const existItem = state.cartItems.find(x => x[0]._id === item._id);
      if (existItem) {
        return {
          ...state,
          // cartItems: [...state.cartItems, [null, +1]],
          cartItems: state.cartItems.map(x =>
            x[0]._id === existItem._id ? item : x,
          ),
          // // cartItems: [...state.cartItems, state.count + 1],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, [item, count]],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem[0]._id !== action.payload[0]._id,
        ),
      };
    case 'INCREMENT':
      return {
        ...state,
        cartItems: [...state.cartItems, [action.payload[1] + 1]],
      };
    // case 'DECREMENT':
    //   return {
    //     ...state,
    //     cartItems: [[action.payload[0], action.payload[1] - 1]],
    //   };
    default:
      return state;
  }
};

export default reducers;
