import {
  USERS_REGISTRATION_LOADING_ERROR,
  USERS_REGISTRATION_LOADING_START,
  USERS_REGISTRATION_LOADING_END,
  USERS_REGISTRATION_ERRORS,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/users-registration';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {
    email: null as string | null,
    username: null as string | null,
  },
};

export type UsersRegistrationStateType = typeof initialState;

const usersRegistration = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case USERS_REGISTRATION_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_REGISTRATION_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case USERS_REGISTRATION_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case USERS_REGISTRATION_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
};

export default usersRegistration;
