const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: new Date().getTime().toString() + action.payload,
            value: action.payload,
            isCompleted: false,
          },
        ],
      };
    }
    case "COMPLETED": {
      return {
        ...state,
        items: [
          ...state.items.filter((item) => {
            return item.id !== action.payload.id;
          }),
        ],
      };
    }

    default:
      return state;
  }
};
export default reducer;
