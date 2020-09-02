import React, { FC } from 'react';
import { Spin } from 'antd';
import classes from './spinner.module.scss';

type Props = {
  wrapperClassName?: string;
};

const Spinner: FC<Props> = ({ wrapperClassName = '' }) => {
  return (
    <div className={[classes.wrapper, wrapperClassName].join(' ')}>
      <Spin className={classes.spinner} tip="loading..." />
    </div>
  );
};

export default Spinner;
