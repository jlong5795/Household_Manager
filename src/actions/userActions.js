import { axiosWithAuth } from "../utils/axiosWithAuth";

import { actions } from "../actiontypes/actiontypes";

export const login = (data) => {
  return (dispatch) => {
    dispatch({ type: actions.USER_LOGIN_START });
    axiosWithAuth()
      .post("/", data)
      .then((response) => {
        dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: actions.USER_LOGIN_FAILURE, payload: error.data });
      });
  };
};

export const register = data => {
    return (dispatch) => {
        dispatch({ type: actions.USER_REGISTER_START });
        axiosWithAuth()
          .post("/", data)
          .then((response) => {
            dispatch({ type: actions.USER_REGISTER_SUCCESS, payload: response.data });
          })
          .catch((error) => {
            dispatch({ type: actions.USER_REGISTER_FAILURE, payload: error.data });
          });
      };
}