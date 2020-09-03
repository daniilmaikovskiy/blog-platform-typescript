import { USER_IS_LOGGED, LOGOUT } from '../actions/action-types';
import * as actions from '../actions/action-creators/is-logged';
import InferValueTypes from '../types/infer-value-types';

const initialState: boolean = false;

export type IsLoggedStateType = boolean;

const isLogged = (state = initialState, action: ReturnType<InferValueTypes<typeof actions>>) => {
  switch (action.type) {
    case USER_IS_LOGGED:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default isLogged;
