import Cookies from 'js-cookie';
import { ThunkActionWithState } from '../helper';
import logouting from './logouting';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import {
  deletedArticle,
  deletingArticleLoadingStart,
  deletingArticleLoadingError,
  deletingArticleLoadingEnd,
} from './action-creators/deleting-article';
import RealworldService from '../services/realworld-service';

type ActionTypes =
  | ReturnType<typeof deletedArticle>
  | ReturnType<typeof deletingArticleLoadingStart>
  | ReturnType<typeof deletingArticleLoadingError>
  | ReturnType<typeof deletingArticleLoadingEnd>;

const deletingArticle = (
  realworldService: RealworldService,
  slug: string
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

    dispatch(deletingArticleLoadingStart());

    realworldService
      .deleteArticle(slug, token)
      .then(() => dispatch(deletedArticle()))
      .catch((error) => dispatch(deletingArticleLoadingError(error.message)))
      .finally(() => dispatch(deletingArticleLoadingEnd()));
  };
};

export default deletingArticle;
