export const initialState = {
  loading: false,
  error: null,
  nameErr: null,
  emailErr: null,
  passwordErr: null,
  confirmPasswordErr: null,
  passcodeErr: null,
  isAuthenticated: false,
  successMsg: null,
  user: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };

    case "LOGIN_SUCCESS":
    case "REGISTER_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        successMsg: action.payload.success,
        error: null,
        user: action.payload.user
      };
    case "USER_LOADED":
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true
      };
    case "LOGIN_FAIL":
    case "USER_LOADED_FAIL":
    case "REGISTER_FAIL":
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload.error && action.payload.error,
        passwordErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "password")
            .map(err => err.msg),
        confirmPasswordErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "confirmPassword")
            .map(err => err.msg),
        emailErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "email")
            .map(err => err.msg),
        nameErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "name")
            .map(err => err.msg),
        passcodeErr:
          action.payload.errors &&
          action.payload.errors
            .filter(object => object.param === "passcode")
            .map(err => err.msg),
        user: null
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        successMsg: "You have successfully logout."
      };
    case "CLEAR_MSG":
      return {
        ...state,
        successMsg: null
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
        passwordErr: null,
        confirmPasswordErr: null,
        passcodeErr: null,
        nameErr: null,
        emailErr: null
      };

    default:
      return state;
  }
};
