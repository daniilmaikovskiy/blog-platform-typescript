import React, { forwardRef, HTMLProps, Ref, Key } from 'react';
import classes from './text-input.module.scss';

export interface Props extends HTMLProps<HTMLInputElement> {
  signature?: string;
  className?: string;
  ref: Ref<HTMLInputElement>;
  key?: Key;
}

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({ signature = '', className = '', ...rest }, ref) => {
    return (
      <label className={[classes.textInput, className].join(' ')}>
        <span>{signature}</span>
        <input {...rest} ref={ref} />
      </label>
    );
  }
);

export default TextInput;
