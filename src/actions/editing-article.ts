import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import { ArticleFormDataType } from '../types';
import logouting from './logouting';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import RealworldService from '../services/realworld-service';
import {
  editingArticleLoadingStart,
  editingArticleSuccess,
  editingArticleLoadingError,
  editingArticleLoadingEnd,
} from './action-creators/editing-article';

type ActionTypes =
  | ReturnType<typeof editingArticleLoadingStart>
  | ReturnType<typeof editingArticleSuccess>
  | ReturnType<typeof editingArticleLoadingError>
  | ReturnType<typeof editingArticleLoadingEnd>;

const editingArticle = (
  realworldService: RealworldService,
  slug: string,
  data: ArticleFormDataType
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
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

    const json = JSON.stringify({ article: data });

    dispatch(editingArticleLoadingStart());

    realworldService
      .updateArticle(slug, token, json)
      .then(() => {
        dispatch(editingArticleSuccess());
      })
      .catch((error) => dispatch(editingArticleLoadingError(error.message)))
      .finally(() => dispatch(editingArticleLoadingEnd()));
  };
};

export default editingArticle;
