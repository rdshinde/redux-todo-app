const initialData = {
  user: false,
  name: null,
  password: null,
  isLoggedIn: false,
};

const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLoggedIn: true, user: true, ...action.payload };
    case "LOGOUT":
      return { ...state, isLoggedIn: false, user: false, name: "" };

    default:
      return { ...state };
  }
};
export { authReducer };
