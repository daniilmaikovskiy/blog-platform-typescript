import React, { useContext } from 'react';
import { Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import classes from './edit-profile.module.scss';
import TextInput from '../text-input';
import {
  ROOT,
  EMAIL_RULES,
  PASSWORD_RULES,
  USERNAME_RULES,
  URL_RULES,
  USER_DATA_COOKIE_NAME,
} from '../../global-settings';
import * as Helper from '../../helper';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import selectors from '../../selectors';
import { UsersEditingDataType } from '../../types';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm<UsersEditingDataType>();
  const realworldService = useContext(RealworldServiceContext);

  const onSibmit = (data: UsersEditingDataType) => {
    dispatch(actions.usersEditing(realworldService, data));
  };

  const usernameClasses = [classes.textInput];
  const emailClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];
  const imageClasses = [classes.textInput];

  const errorMessages = Helper.getErrorMessages(errors);

  const error = useSelector(selectors.usersEditingLoadingError);
  const errorMessage = useSelector(selectors.usersEditingErrorMessage);
  const loading = useSelector(selectors.usersEditingLoading);
  const editingErrors = useSelector(selectors.usersEditingErrors);
  const isLogged = useSelector(selectors.isLogged);

  if (errors.username || editingErrors.username) {
    usernameClasses.push(classes.textInputError);
  }
  if (errors.email || editingErrors.email) {
    emailClasses.push(classes.textInputError);
  }
  if (errors.password) {
    passwordClasses.push(classes.textInputError);
  }
  if (errors.image) {
    imageClasses.push(classes.textInputError);
  }

  if (!Cookies.get(USER_DATA_COOKIE_NAME) && !isLogged) {
    return <Redirect to={`${ROOT}/sign-in`} />;
  }

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSibmit)}>
      <h2 className={classes.title}>Edit Profile</h2>
      <TextInput
        className={usernameClasses.join(' ')}
        name="username"
        type="text"
        signature="Username"
        placeholder="Username"
        ref={register(USERNAME_RULES)}
      />
      {errors.username && (
        <span className={classes.errorMessage}>{errorMessages.get('username')}</span>
      )}
      {editingErrors.username && (
        <span className={classes.errorMessage}>{`Username ${editingErrors.username[0]}`}</span>
      )}
      <TextInput
        className={emailClasses.join(' ')}
        name="email"
        type="email"
        signature="Email address"
        placeholder="Email address"
        ref={register(EMAIL_RULES)}
      />
      {errors.email && <span className={classes.errorMessage}>{errorMessages.get('email')}</span>}
      {editingErrors.email && (
        <span className={classes.errorMessage}>{`Email ${editingErrors.email[0]}`}</span>
      )}
      <TextInput
        className={passwordClasses.join(' ')}
        name="password"
        type="password"
        signature="New password"
        placeholder="New password"
        ref={register({ ...PASSWORD_RULES, required: false })}
      />
      {errors.password && (
        <span className={classes.errorMessage}>{errorMessages.get('password')}</span>
      )}
      <TextInput
        className={imageClasses.join(' ')}
        name="image"
        type="url"
        signature="Avatar image (url)"
        placeholder="Avatar image"
        ref={register({ ...URL_RULES, required: false })}
      />
      {errors.image && <span className={classes.errorMessage}>{errorMessages.get('image')}</span>}
      <Button className={classes.btn} type="primary" htmlType="submit">
        Save
      </Button>
    </form>
  );
};

export default EditProfile;
