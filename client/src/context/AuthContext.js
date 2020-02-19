import React, { createContext, useReducer, useEffect } from "react";
import { authReducer, initialState } from "../reducers/authReducer";
import axios from "axios";
import setToken from "../utilities/setToken";
export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (localStorage.token) {
    setToken(localStorage.token);
  }
  const login = async userData => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.post(
        "/admin/login",
        JSON.stringify(userData),
        config
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

      //set token in headers
      setToken(res.data.token);
      loadUser();
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
  };
  const loadUser = async () => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
    try {
      const res = await axios.get("/admin/user");
      dispatch({ type: "USER_LOADED", payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "USER_LOADED_ERROR", payload: error.response.data });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setTimeout(() => {
      dispatch({ type: "CLEAR_MSG" });
    }, 2000);
  };

  const register = async userData => {
    dispatch({ type: "CLEAR_ERROR" });
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.post(
        "/admin/register",
        JSON.stringify(userData),
        config
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      //set token in headers
      setToken(res.data.token);
      loadUser();
      setTimeout(() => {
        dispatch({ type: "CLEAR_MSG" });
      }, 2000);
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "REGISTER_FAIL", payload: error.response.data });
    }
  };
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, loadUser, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
