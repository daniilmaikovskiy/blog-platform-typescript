import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { enUS } from 'date-fns/locale';
import {
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from './global-settings';
import { StateType } from './types/state';
import formatWithOptions from './format-with-options';

export type ThunkActionWithState<T extends Action> = ThunkAction<
  Promise<void>,
  StateType,
  unknown,
  T
>;

const minLengthMessage = (name: string, value: number) =>
  `Your ${name} needs to be at least ${value} characters`;
const maxLengthMessage = (name: string, value: number) =>
  `Your ${name} needs on more than ${value} characters`;

export interface Errors {
  [key: string]: {
    type: string;
  };
}

export const getErrorMessages = (errors: Errors) => {
  const errorsKeys = Object.keys(errors);

  return errorsKeys.reduce((acc, key) => {
    const el = errors[key];

    switch (key) {
      case 'username': {
        if (el.type === 'minLength') {
          return acc.set('username', minLengthMessage('username', USERNAME_MIN_LENGTH));
        }
        if (el.type === 'maxLength') {
          return acc.set('username', maxLengthMessage('username', USERNAME_MAX_LENGTH));
        }
        if (el.type === 'required') {
          return acc.set('username', 'Required field');
        }
        break;
      }
      case 'email': {
        if (el.type === 'pattern') {
          return acc.set('email', 'Invalid email');
        }
        if (el.type === 'required') {
          return acc.set('email', 'Required field');
        }
        break;
      }
      case 'image': {
        if (el.type === 'pattern') {
          return acc.set('image', 'Invalid url');
        }
        if (el.type === 'required') {
          return acc.set('image', 'Required field');
        }
        break;
      }
      case 'title': {
        if (el.type === 'required') {
          return acc.set('title', 'Required field');
        }
        break;
      }
      case 'description': {
        if (el.type === 'required') {
          return acc.set('description', 'Required field');
        }
        break;
      }
      case 'body': {
        if (el.type === 'required') {
          return acc.set('body', 'Required field');
        }
        break;
      }
      case 'password': {
        if (el.type === 'minLength') {
          return acc.set('password', minLengthMessage('password', PASSWORD_MIN_LENGTH));
        }
        if (el.type === 'maxLength') {
          return acc.set('password', maxLengthMessage('password', PASSWORD_MAX_LENGTH));
        }
        if (el.type === 'required') {
          return acc.set('password', 'Required field');
        }
        break;
      }
      case 'repeatPassword': {
        if (el.type === 'validate') {
          return acc.set('repeatPassword', 'Passwords must match');
        }
        if (el.type === 'required') {
          return acc.set('repeatPassword', 'Required field');
        }
        break;
      }
      default:
        throw new Error(`Unexpected value '${key}' in getErrorMessages method`);
    }

    throw new Error(`Unexpected value '${key}' with type '${el.type}' in getErrorMessages method`);
  }, new Map());
};

export const formatDate = (dateObj: Date) =>
  formatWithOptions({ locale: enUS }, 'MMMM d, yyyy')(dateObj);
