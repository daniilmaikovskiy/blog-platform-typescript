import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { UsersRegistrationDataType, ErrorsResponseType, UserResponseType } from '../types';
import { USER_DATA_COOKIE_NAME, USER_DATA_COOKIE_EXPIRES } from '../global-settings';
import { userIsLogged } from './action-creators/is-logged';
import RealworldService from '../services/realworld-service';
import {
  usersRegistrationLoadingStart,
  usersRegistrationErrors,
  usersRegistrationLoadingError,
  usersRegistrationLoadingEnd,
} from './action-creators/users-registration';

type ActionTypes =
  | ReturnType<typeof userIsLogged>
  | ReturnType<typeof usersRegistrationLoadingStart>
  | ReturnType<typeof usersRegistrationErrors>
  | ReturnType<typeof usersRegistrationLoadingError>
  | ReturnType<typeof usersRegistrationLoadingEnd>;

const usersRegistration = (
  realworldService: RealworldService,
  data: UsersRegistrationDataType
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    dispatch(usersRegistrationLoadingStart());

    const body = JSON.stringify({
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });

    realworldService
      .newUsersRegistration(body)
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
          dispatch(usersRegistrationErrors((json as ErrorsResponseType).errors));
        }
      })
      .catch((error) => dispatch(usersRegistrationLoadingError(error.message)))
      .finally(() => dispatch(usersRegistrationLoadingEnd()));
  };
};

export default usersRegistration;
