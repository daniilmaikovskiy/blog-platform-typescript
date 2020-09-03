import React, { FC, HTMLProps } from 'react';
import classes from './like-button.module.scss';
import likeheartImg from '../../img/likeheart.svg';
import likedLikeheartImg from '../../img/liked-likeheart.svg';

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: 'button';
  favorited?: boolean;
  favoritesCount?: number;
}

const LikeButton: FC<Props> = ({ favorited = false, favoritesCount = 0, ...rest }) => {
  const heartImage = favorited ? likedLikeheartImg : likeheartImg;

  return (
    <button type="button" className={classes.wrapper} {...rest}>
      <img src={heartImage} alt="like" />
      <span className={classes.number}>{favoritesCount}</span>
    </button>
  );
};

export default LikeButton;
