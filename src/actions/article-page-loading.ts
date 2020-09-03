import { SingleArticleResponseType } from '../types';
import {
  articlePageHideDeleteModalWindow,
  articlePageIsChanged,
  articlePageLoadingStart,
  articlePageLoadingError,
  articlePageLoadingEnd,
} from './action-creators/article-page';
import { editingArticleDefaultState } from './action-creators/editing-article';
import { creatingArticleDefaultState } from './action-creators/creating-article';
import { ThunkActionWithState } from '../helper';
import RealworldService from '../services/realworld-service';

type ActionTypes =
  | ReturnType<typeof articlePageHideDeleteModalWindow>
  | ReturnType<typeof articlePageIsChanged>
  | ReturnType<typeof creatingArticleDefaultState>
  | ReturnType<typeof editingArticleDefaultState>
  | ReturnType<typeof articlePageLoadingStart>
  | ReturnType<typeof articlePageLoadingError>
  | ReturnType<typeof articlePageLoadingEnd>;

const articlePageLoading = (
  realworldService: RealworldService,
  slug: string
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    dispatch(articlePageHideDeleteModalWindow());
    dispatch(creatingArticleDefaultState());
    dispatch(editingArticleDefaultState());

    const {
      articles: { data: articles },
      articlePage: { current },
    } = getState();
    const targetArticleIndex = articles.findIndex((el) => el.slug === slug);

    if (current !== null && current.slug === slug) {
      return;
    }

    if (targetArticleIndex !== -1) {
      dispatch(articlePageIsChanged(articles[targetArticleIndex]));
      return;
    }

    dispatch(articlePageLoadingStart());

    realworldService
      .getSingleArticle(slug)
      .then((json) => {
        if ((json as SingleArticleResponseType).article) {
          dispatch(articlePageIsChanged((json as SingleArticleResponseType).article));
        }
      })
      .catch((error: Error) => dispatch(articlePageLoadingError(error.message)))
      .finally(() => dispatch(articlePageLoadingEnd()));
  };
};

export default articlePageLoading;
