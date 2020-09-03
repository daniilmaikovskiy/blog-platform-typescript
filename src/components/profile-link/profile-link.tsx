import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import classes from './profile-link.module.scss';
import defaultAvatar from '../../img/avatar.png';
import { USER_DATA_COOKIE_NAME, ROOT } from '../../global-settings';
import actions from '../../actions';
import selectors from '../../selectors';

interface Props {
  className?: string;
}

const ProfileLink: FC<Props> = ({ className = '' }) => {
  const dispatch = useDispatch();
  useSelector(selectors.usersEditingSuccessObj);
  const isLogged = useSelector(selectors.isLogged);

  let username = '';
  let userImage = null as string | null;

  if (isLogged) {
    try {
      const cookie = Cookies.get(USER_DATA_COOKIE_NAME);

      if (cookie) {
        username = JSON.parse(cookie).user.username;
        userImage = JSON.parse(cookie).user.image;
      } else {
        return null;
      }
    } catch {
      dispatch(actions.logouting());
      return null;
    }
  } else {
    return null;
  }

  const avatar = userImage === null ? defaultAvatar : userImage;

  return (
    <Link className={[classes.wrapper, className].join(' ')} to={`${ROOT}/profile`}>
      <span>{username}</span>
      <img src={avatar} alt="" width="46" height="46" />
    </Link>
  );
};

export default ProfileLink;
