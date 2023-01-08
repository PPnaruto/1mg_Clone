const SignupAction = (dispatch, payload) => {
  dispatch({
    type: "SIGN_UP",
    payload,
  });
};

const LoginAction = (dispatch, payload) => {
  dispatch({
    type: "LOGIN_IN",
    payload,
  });
};

const LogoutAction = (dispatch, payload) => {
  dispatch({
    type: "LOG_OUT",
    payload,
  });
};

export { SignupAction, LoginAction, LogoutAction };
