export const addTodo = (data) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: Math.random(),
      data: data,
    },
  };
};
export const deleteTodo = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};

export const removeTodo = () => {
  return {
    type: "REMOVE_ALL_ITEMS",
  };
};

export const loginUser = (data) => {
  return {
    type: "LOGIN",
    payload: {
      ...data,
    },
  };
};
export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
