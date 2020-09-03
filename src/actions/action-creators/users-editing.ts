import { ServerErrorsType } from '../../types';
import {
  USERS_EDITING_SUCCESS,
  USERS_EDITING_ERRORS,
  USERS_EDITING_LOADING_ERROR,
  USERS_EDITING_LOADING_START,
  USERS_EDITING_LOADING_END,
} from '../action-types';

export const usersEditingSuccess = () =>
  ({
    type: USERS_EDITING_SUCCESS,
  } as const);

export const usersEditingErrors = (errors: ServerErrorsType) =>
  ({
    type: USERS_EDITING_ERRORS,
    errors,
  } as const);

export const usersEditingLoadingError = (message: string) =>
  ({
    type: USERS_EDITING_LOADING_ERROR,
    message,
  } as const);

export const usersEditingLoadingStart = () =>
  ({
    type: USERS_EDITING_LOADING_START,
  } as const);

export const usersEditingLoadingEnd = () =>
  ({
    type: USERS_EDITING_LOADING_END,
  } as const);
