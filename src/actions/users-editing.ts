import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { UsersEditingDataType, ErrorsResponseType, UserResponseType } from '../types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';
import logouting from './logouting';
import RealworldService from '../services/realworld-service';
import {
  usersEditingLoadingStart,
  usersEditingSuccess,
  usersEditingErrors,
  usersEditingLoadingError,
  usersEditingLoadingEnd,
} from './action-creators/users-editing';

type ActionTypes =
  | ReturnType<typeof usersEditingLoadingStart>
  | ReturnType<typeof usersEditingSuccess>
  | ReturnType<typeof usersEditingErrors>
  | ReturnType<typeof usersEditingLoadingError>
  | ReturnType<typeof usersEditingLoadingEnd>;

const usersEditing = (
  realworldService: RealworldService,
  data: UsersEditingDataType
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    let token = '';

    try {
      const cookie = Cookies.get(USER_DATA_COOKIE_NAME);

      if (cookie) {
        token = JSON.parse(cookie).user.token;
      }
    } catch {
      dispatch(logouting());
      return;
    }

    dispatch(usersEditingLoadingStart());

    const user: UsersEditingDataType = {
      email: data.email,
      username: data.username,
    };

    if (data.password) {
      user.password = data.password;
    }

    if (data.image) {
      user.image = data.image;
    }

    const body = JSON.stringify({
      user,
    });

    realworldService
      .updateUser(body, token)
      .then((json) => {
        if ((json as UserResponseType).user) {
          Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(json), {
            path: '/',
            expires: USER_DATA_COOKIE_EXPIRES,
            sameSite: 'strict',
          });
          dispatch(usersEditingSuccess());
        }
        if ((json as ErrorsResponseType).errors) {
          dispatch(usersEditingErrors((json as ErrorsResponseType).errors));
        }
      })
      .catch((error) => dispatch(usersEditingLoadingError(error.message)))
      .finally(() => dispatch(usersEditingLoadingEnd()));
  };
};

export default usersEditing;
