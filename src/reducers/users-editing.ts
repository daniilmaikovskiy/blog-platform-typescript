import {
  USERS_EDITING_LOADING_ERROR,
  USERS_EDITING_LOADING_START,
  USERS_EDITING_LOADING_END,
  USERS_EDITING_ERRORS,
  USERS_EDITING_SUCCESS,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/users-editing';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  errors: {} as { [key: string]: string },
  successObj: {},
};

export type UsersEditingStateType = typeof initialState;

const usersEditing = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case USERS_EDITING_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case USERS_EDITING_LOADING_START:
      return { ...state, loading: true };
    case USERS_EDITING_LOADING_END:
      return { ...state, loading: false };
    case USERS_EDITING_ERRORS:
      return { ...state, errors: action.errors };
    case USERS_EDITING_SUCCESS:
      return { ...state, successObj: {} };
    default:
      return state;
  }
};

export default usersEditing;
