import React, { useContext, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import classes from './article.module.scss';
import avatarImg from '../../img/avatar.png';
import { ROOT } from '../../global-settings';
import LikeButton from '../like-button';
import actions from '../../actions';
import RealworldServiceContext from '../realworld-service-context';
import { ArticleType } from '../../types';
import { formatDate } from '../../helper';

interface Props {
  isLogged: boolean;
  data: ArticleType;
}

const Article: FC<Props> = ({ data, isLogged }) => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  const tags = data.tagList.map((el) => (
    <Tag key={el} className={classes.tag}>
      {el}
    </Tag>
  ));

  return (
    <article className={classes.wrapper}>
      <section className={classes.firstVisible}>
        <section className={classes.main}>
          <div className={classes.titleBlock}>
            <Link className={classes.title} to={`${ROOT}/articles/${data.slug}/`}>
              {data.title}
            </Link>
            <LikeButton
              favorited={data.favorited}
              favoritesCount={data.favoritesCount}
              onClick={() => {
                if (isLogged) {
                  dispatch(actions.likeButtonOnClick(realworldService, data.slug, data.favorited));
                }
              }}
            />
          </div>
          <div className={classes.tagBlock}>{tags}</div>
          <div className={classes.description}>{data.description}</div>
        </section>
        <section className={classes.authorBlock}>
          <div className={classes.authorBlockText}>
            <span className={classes.author}>{data.author.username}</span>
            <span className={classes.date}>{formatDate(new Date(data.createdAt))}</span>
          </div>
          <img
            src={data.author.image ? data.author.image : avatarImg}
            alt=""
            width="46"
            height="46"
          />
        </section>
      </section>
    </article>
  );
};

export default Article;
