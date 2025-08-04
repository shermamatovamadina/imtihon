export const todoReducer = (state, action) => {
    switch (action.type) {
      case "SET_TODOS":
        return action.payload;
      case "ADD_TODO":
        return [action.payload, ...state];
      case "UPDATE_TODO":
        return state.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        );
      case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };
  