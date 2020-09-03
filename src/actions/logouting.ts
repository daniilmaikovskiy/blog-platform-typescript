import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import { logout } from './action-creators/is-logged';

type ActionTypes = ReturnType<typeof logout>;

const logouting = (): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    Cookies.remove(USER_DATA_COOKIE_NAME, {
      path: '/',
      sameSite: 'strict',
    });
    dispatch(logout());
  };
};

export default logouting;
