const initialData = {
  list: [],
};

const todoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      let { id, data } = action.payload;
      return {
        ...state,
        list: [...state.list, { id: id, data: data }],
      };
    case "DELETE_ITEM":
      const updatedList = state.list.filter((item) => item.id !== action.id);
      return {
        ...state,
        list: updatedList,
      };
    case "REMOVE_ALL_ITEMS":
      return {
        ...state,
        list: [],
      };
    default:
      return { ...state };
  }
};
export { todoReducer };
