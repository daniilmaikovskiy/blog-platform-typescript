import React, { useContext } from 'react';
import { Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import classes from './sign-up.module.scss';
import TextInput from '../text-input';
import { ROOT, EMAIL_RULES, USERNAME_RULES, PASSWORD_RULES } from '../../global-settings';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import selectors from '../../selectors';
import Checkbox from '../checkbox';
import * as Helper from '../../helper';
import { UsersRegistrationSubmitDataType } from '../../types';

const SignUp = () => {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, watch } = useForm<UsersRegistrationSubmitDataType>();
  const realworldService = useContext(RealworldServiceContext);

  const onSibmit = (data: UsersRegistrationSubmitDataType) => {
    dispatch(actions.usersRegistration(realworldService, data));
  };

  const usernameClasses = [classes.textInput];
  const emailClasses = [classes.textInput];
  const passwordClasses = [classes.textInput];
  const repeatPasswordClasses = [classes.textInput];

  const errorMessages = Helper.getErrorMessages(errors as Helper.Errors);

  const error = useSelector(selectors.usersRegistrationLoadingError);
  const errorMessage = useSelector(selectors.usersRegistrationErrorMessage);
  const loading = useSelector(selectors.usersRegistrationLoading);
  const registrationErrors = useSelector(selectors.usersRegistrationErrors);
  const isLogged = useSelector(selectors.isLogged);

  if (errors.username || registrationErrors.username) {
    usernameClasses.push(classes.textInputError);
  }
  if (errors.email || registrationErrors.email) {
    emailClasses.push(classes.textInputError);
  }
  if (errors.password) {
    passwordClasses.push(classes.textInputError);
  }
  if (errors.repeatPassword) {
    repeatPasswordClasses.push(classes.textInputError);
  }

  if (isLogged) {
    return <Redirect to={`${ROOT}/`} />;
  }

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(onSibmit)}>
      <h2 className={classes.title}>Create new account</h2>
      <TextInput
        className={usernameClasses.join(' ')}
        name="username"
        signature="Username"
        placeholder="Username"
        ref={register(USERNAME_RULES)}
      />
      {errors.username && (
        <span className={classes.errorMessage}>{errorMessages.get('username')}</span>
      )}
      {registrationErrors.username && (
        <span className={classes.errorMessage}>{`Username ${registrationErrors.username}`}</span>
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
      {registrationErrors.email && (
        <span className={classes.errorMessage}>{`Email ${registrationErrors.email}`}</span>
      )}
      <TextInput
        className={passwordClasses.join(' ')}
        name="password"
        type="password"
        signature="Password"
        placeholder="Password"
        ref={register(PASSWORD_RULES)}
      />
      {errors.password && (
        <span className={classes.errorMessage}>{errorMessages.get('password')}</span>
      )}
      <TextInput
        className={repeatPasswordClasses.join(' ')}
        name="repeatPassword"
        type="password"
        signature="Repeat password"
        placeholder="Password"
        ref={register({ required: true, validate: (value: string) => value === watch('password') })}
      />
      {errors.repeatPassword && (
        <span className={classes.errorMessage}>{errorMessages.get('repeatPassword')}</span>
      )}
      <label className={classes.checkbox} htmlFor="checkbox">
        <Checkbox name="i-agree" id="checkbox" />
        <span className={classes.checkboxText}>
          I agree to the processing of my personal information
        </span>
      </label>
      <Button type="primary" htmlType="submit">
        Create
      </Button>
      <span className={classes.signInLink}>
        Already have an account? <Link to={`${ROOT}/sign-in`}>Sign In.</Link>
      </span>
    </form>
  );
};

export default SignUp;
