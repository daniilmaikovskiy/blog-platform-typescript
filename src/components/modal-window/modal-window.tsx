import React, { FC } from 'react';
import { Button } from 'antd';
import classes from './modal-window.module.scss';

interface Props {
  onClickNo: () => void;
  onClickYes: () => void;
}

const ModalWindow: FC<Props> = ({ onClickNo, onClickYes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.modalAlert}>
        <div className={classes.alertSymbol}>!</div>
        <div className={classes.alertMessage}>Are you sure to delete this article?</div>
      </div>
      <div className={classes.modalButtons}>
        <Button size="small" onClick={onClickNo}>
          No
        </Button>
        <Button className={classes.modalButtonYes} size="small" type="primary" onClick={onClickYes}>
          Yes
        </Button>
      </div>
    </div>
  );
};

export default ModalWindow;
