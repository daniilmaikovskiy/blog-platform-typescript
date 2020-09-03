import {
  USERS_AUTHENTICATION_ERRORS,
  USERS_AUTHENTICATION_LOADING_ERROR,
  USERS_AUTHENTICATION_LOADING_START,
  USERS_AUTHENTICATION_LOADING_END,
} from '../action-types';
import { ServerErrorsType } from '../../types';

export const usersAuthenticationErrors = (errors: ServerErrorsType) =>
  ({
    type: USERS_AUTHENTICATION_ERRORS,
    errors,
  } as const);

export const usersAuthenticationLoadingError = (message: string) =>
  ({
    type: USERS_AUTHENTICATION_LOADING_ERROR,
    message,
  } as const);

export const usersAuthenticationLoadingStart = () =>
  ({
    type: USERS_AUTHENTICATION_LOADING_START,
  } as const);

export const usersAuthenticationLoadingEnd = () =>
  ({
    type: USERS_AUTHENTICATION_LOADING_END,
  } as const);
