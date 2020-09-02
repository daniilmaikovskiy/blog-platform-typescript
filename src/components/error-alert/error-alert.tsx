import React, { FC } from 'react';
import { Alert } from 'antd';
import classes from './error-alert.module.scss';

type Props = {
  description: string;
  wrapperClassName?: string;
};

const ErrorAlert: FC<Props> = ({ wrapperClassName = '', description }) => {
  return (
    <div className={[classes.wrapper, wrapperClassName].join(' ')}>
      <Alert
        className={classes.alert}
        message="Error"
        description={description}
        type="error"
        showIcon
      />
    </div>
  );
};

export default ErrorAlert;
