import {
  FEATCH_USERS_FAILURE,
  FEATCH_USERS_REQUIEST,
  FEATCH_USERS_SUCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FEATCH_USERS_REQUIEST:
      return {
        ...state,
        loading: true,
      };
    case FEATCH_USERS_SUCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FEATCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
