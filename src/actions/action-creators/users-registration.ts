import { ServerErrorsType } from '../../types';
import {
  USERS_REGISTRATION_ERRORS,
  USERS_REGISTRATION_LOADING_ERROR,
  USERS_REGISTRATION_LOADING_START,
  USERS_REGISTRATION_LOADING_END,
} from '../action-types';

export const usersRegistrationErrors = (errors: ServerErrorsType) =>
  ({
    type: USERS_REGISTRATION_ERRORS,
    errors,
  } as const);

export const usersRegistrationLoadingError = (message: string) =>
  ({
    type: USERS_REGISTRATION_LOADING_ERROR,
    message,
  } as const);

export const usersRegistrationLoadingStart = () =>
  ({
    type: USERS_REGISTRATION_LOADING_START,
  } as const);

export const usersRegistrationLoadingEnd = () =>
  ({
    type: USERS_REGISTRATION_LOADING_END,
  } as const);
