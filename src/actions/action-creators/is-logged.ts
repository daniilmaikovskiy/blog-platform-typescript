import { USER_IS_LOGGED, LOGOUT } from '../action-types';

export const userIsLogged = () =>
  ({
    type: USER_IS_LOGGED,
  } as const);

export const logout = () =>
  ({
    type: LOGOUT,
  } as const);
