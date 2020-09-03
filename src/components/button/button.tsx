import React, { HTMLProps, forwardRef, Ref, Key } from 'react';
import classes from './button.module.scss';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button';
  text: string;
  ref: Ref<HTMLButtonElement>;
  key?: Key;
}

const Button = forwardRef<HTMLButtonElement, Props>(({ className = '', text, ...rest }, ref) => {
  return (
    <button type="button" className={[classes.wrapper, className].join(' ')} ref={ref} {...rest}>
      {text}
    </button>
  );
});

export default Button;
