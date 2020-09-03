import {
  USERS_AUTHENTICATION_LOADING_ERROR,
  USERS_AUTHENTICATION_LOADING_START,
  USERS_AUTHENTICATION_LOADING_END,
  USERS_AUTHENTICATION_ERRORS,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/users-authentication';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {
    'email or password': '',
  },
};

export type UsersAutheticationStateType = typeof initialState;

const usersAuthentication = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case USERS_AUTHENTICATION_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_AUTHENTICATION_LOADING_START:
      return { ...state, loading: true };
    case USERS_AUTHENTICATION_LOADING_END:
      return { ...state, loading: false };
    case USERS_AUTHENTICATION_ERRORS:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

export default usersAuthentication;
