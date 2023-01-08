const initial = JSON.parse(localStorage.getItem("1mg_users")) || {
  isAuth: false,
  current: "",
  users: [],
};

const AuthReducer = (state = initial, action) => {
  switch (action.type) {
    case "SIGN_UP":
      localStorage.setItem(
        "1mg_users",
        JSON.stringify({
          isAuth: true,
          current: action.payload,
          users: [...state.users, action.payload],
        })
      );
      return {
        isAuth: true,
        current: action.payload,
        users: [...state.users, action.payload],
      };
    case "LOGIN_IN":
      return {
        ...state,
        isAuth: true,
        current: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        isAuth: false,
        current: "",
      };
    default:
      return state;
  }
};

export default AuthReducer;
