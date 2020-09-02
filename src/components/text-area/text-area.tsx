import React, { forwardRef, HTMLProps, Ref, Key } from 'react';
import classes from './text-area.module.scss';

export interface Props extends HTMLProps<HTMLTextAreaElement> {
  signature?: string;
  className?: string;
  ref: Ref<HTMLTextAreaElement>;
  key?: Key;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ signature = '', className = '', ...rest }, ref) => {
    return (
      <label className={[classes.textInput, className].join(' ')}>
        <span>{signature}</span>
        <textarea {...rest} ref={ref} />
      </label>
    );
  }
);

export default TextArea;
