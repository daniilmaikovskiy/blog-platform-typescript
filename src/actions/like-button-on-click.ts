import Cookies from 'js-cookie';
import { ArticleType, SingleArticleResponseType } from '../types';
import { ThunkActionWithState } from '../helper';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import logouting from './logouting';
import { articlePageIsChanged } from './action-creators/article-page';
import { articlesIsChanged } from './action-creators/articles';
import RealworldService from '../services/realworld-service';

type ActionTypes = ReturnType<typeof articlePageIsChanged> | ReturnType<typeof articlesIsChanged>;

const likeButtonOnClick = (
  realworldService: RealworldService,
  slug: string,
  isFavorited: boolean,
  isCurrentArticlePage = false
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    let token = '';

    try {
      const cookie = Cookies.get(USER_DATA_COOKIE_NAME);

      if (cookie) {
        token = JSON.parse(cookie).user.token;
      }
    } catch {
      dispatch(logouting());
      return;
    }

    const {
      articles: { data: articles },
      articlePage: { current },
    } = getState();
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);
    const articlesHaveTarget = targetArticleIndex !== -1;

    let articleForInserting = null as null | ArticleType;

    if (isCurrentArticlePage) {
      if (current === null) {
        throw new Error('after loading of article page articlePage.current === null');
      }

      articleForInserting = {
        ...current,
        favorited: !isFavorited,
        favoritesCount: current.favoritesCount + (isFavorited ? -1 : 1),
      };
    } else {
      articleForInserting = {
        ...articles[targetArticleIndex],
        favorited: !isFavorited,
        favoritesCount: articles[targetArticleIndex].favoritesCount + (isFavorited ? -1 : 1),
      };
    }

    const insertLikedArticle = (article = articleForInserting) => {
      if (article === null) {
        return;
      }

      let newArticles = articles;

      if (articlesHaveTarget) {
        newArticles = [
          ...articles.slice(0, targetArticleIndex),
          article,
          ...articles.slice(targetArticleIndex + 1),
        ];
      }

      dispatch(articlesIsChanged(newArticles));
      dispatch(articlePageIsChanged(article));
    };

    insertLikedArticle();

    if (isFavorited) {
      realworldService
        .unfavoriteArticle(slug, token)
        .then((json) => {
          if ((json as SingleArticleResponseType).article) {
            insertLikedArticle((json as SingleArticleResponseType).article);
          }
        })
        .catch(() => {});
    } else {
      realworldService
        .favoriteArticle(slug, token)
        .then((json) => {
          if ((json as SingleArticleResponseType).article) {
            insertLikedArticle((json as SingleArticleResponseType).article);
          }
        })
        .catch(() => {});
    }
  };
};

export default likeButtonOnClick;
