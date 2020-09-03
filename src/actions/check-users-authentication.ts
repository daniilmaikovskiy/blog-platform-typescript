import Cookie from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import { userIsLogged } from './action-creators/is-logged';

type ActionTypes = ReturnType<typeof userIsLogged>;

const checkUsersAuthentication = (): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    if (Cookie.get(USER_DATA_COOKIE_NAME)) {
      dispatch(userIsLogged());
    }
  };
};

export default checkUsersAuthentication;
