import Cookies from 'js-cookie';
import { ArticleFormDataType, SingleArticleResponseType } from '../types';
import { ThunkActionWithState } from '../helper';
import { USER_DATA_COOKIE_NAME } from '../global-settings';
import logouting from './logouting';
import { articlePageIsChanged } from './action-creators/article-page';
import {
  creatingArticleLoadingStart,
  creatingArticleSuccess,
  creatingArticleLoadingError,
  creatingArticleLoadingEnd,
} from './action-creators/creating-article';
import RealworldService from '../services/realworld-service';

type ActionTypes =
  | ReturnType<typeof creatingArticleLoadingStart>
  | ReturnType<typeof creatingArticleSuccess>
  | ReturnType<typeof creatingArticleLoadingError>
  | ReturnType<typeof creatingArticleLoadingEnd>
  | ReturnType<typeof articlePageIsChanged>;

const creatingArticle = (
  realworldService: RealworldService,
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

    dispatch(creatingArticleLoadingStart());

    const json = JSON.stringify({ article: data });

    realworldService
      .createArticle(json, token)
      .then((responseJson) => {
        if ((responseJson as SingleArticleResponseType).article) {
          dispatch(articlePageIsChanged((responseJson as SingleArticleResponseType).article));
          dispatch(creatingArticleSuccess());
        }
      })
      .catch((error) => dispatch(creatingArticleLoadingError(error.message)))
      .finally(() => dispatch(creatingArticleLoadingEnd()));
  };
};

export default creatingArticle;
