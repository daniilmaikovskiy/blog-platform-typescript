import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { UsersAuthenticationDataType, ErrorsResponseType, UserResponseType } from '../types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';
import { userIsLogged } from './action-creators/is-logged';
import {
  usersAuthenticationLoadingStart,
  usersAuthenticationErrors,
  usersAuthenticationLoadingError,
  usersAuthenticationLoadingEnd,
} from './action-creators/users-authentication';
import RealworldService from '../services/realworld-service';

type ActionTypes =
  | ReturnType<typeof userIsLogged>
  | ReturnType<typeof usersAuthenticationLoadingStart>
  | ReturnType<typeof usersAuthenticationErrors>
  | ReturnType<typeof usersAuthenticationLoadingError>
  | ReturnType<typeof usersAuthenticationLoadingEnd>;

const usersAuthentication = (
  realworldService: RealworldService,
  data: UsersAuthenticationDataType
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    dispatch(usersAuthenticationLoadingStart());

    const body = JSON.stringify({
      user: {
        email: data.email,
        password: data.password,
      },
    });

    realworldService
      .usersAuthentication(body)
      .then((json) => {
        if ((json as UserResponseType).user) {
          Cookies.set(USER_DATA_COOKIE_NAME, JSON.stringify(json), {
            path: '/',
            expires: USER_DATA_COOKIE_EXPIRES,
            sameSite: 'strict',
          });
          dispatch(userIsLogged());
        }
        if ((json as ErrorsResponseType).errors) {
          dispatch(usersAuthenticationErrors((json as ErrorsResponseType).errors));
        }
      })
      .catch((error) => dispatch(usersAuthenticationLoadingError(error.message)))
      .finally(() => dispatch(usersAuthenticationLoadingEnd()));
  };
};

export default usersAuthentication;
