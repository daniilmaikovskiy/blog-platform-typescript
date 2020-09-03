import React, { forwardRef, HTMLProps, Ref, Key } from 'react';
import classes from './tag-field.module.scss';
import TextInput from '../text-input';
import Button from '../button';

interface Props extends HTMLProps<HTMLInputElement> {
  signature?: string;
  isLast?: boolean;
  mayBeDeleted?: boolean;
  className?: string;
  onAdd?: () => void;
  onDelete?: () => void;
  ref: Ref<HTMLInputElement>;
  key?: Key;
}

const TagField = forwardRef<HTMLInputElement, Props>(
  ({ className = '', isLast = false, mayBeDeleted = false, onDelete, onAdd, ...rest }, ref) => {
    return (
      <div className={[classes.wrapper, className].join(' ')}>
        <TextInput className={classes.tag} placeholder="Tag" {...rest} ref={ref} />
        {mayBeDeleted && <Button className={classes.delete} text="Delete" onClick={onDelete} />}
        {isLast && <Button className={classes.btn} text="Add tag" onClick={onAdd} />}
      </div>
    );
  }
);

export default TagField;
