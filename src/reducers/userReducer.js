import {actions} from "../actiontypes/actiontypes";
import { Component } from "react";

export const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  isAdmin: false,
  isLoading: false,
  errors: null,
  tasks: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_START:
        return {
            ...state,
            isLoading: true
        };
    case actions.USER_LOGIN_SUCCESS:
        console.log(action.payload)
        return {
            ...state,
            email: action.payload.email,
            isLoading: false,
        };
    case actions.USER_LOGIN_FAILURE:
        return {
            ...state,
            errors: action.payload
        };
    case actions.USER_REGISTER_START:
        return state;
    case actions.USER_REGISTER_SUCCESS:
        return state;
    case actions.USER_REGISTER_FAILURE:
        return state;
    default:
        return state;
  }
};

