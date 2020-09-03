import { ArticlesResponseType } from '../types/index';
import {
  articlesIsChanged,
  articlesLoadingStart,
  articlesCountIsChanged,
  articlesLoadingError,
  articlesLoadingEnd,
} from './action-creators/articles';
import RealworldService from '../services/realworld-service';
import { ThunkActionWithState } from '../helper';

type ActionTypes =
  | ReturnType<typeof articlesIsChanged>
  | ReturnType<typeof articlesLoadingStart>
  | ReturnType<typeof articlesCountIsChanged>
  | ReturnType<typeof articlesLoadingError>
  | ReturnType<typeof articlesLoadingEnd>;

const articlesLoading = (
  realworldService: RealworldService,
  page = 1
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    dispatch(articlesLoadingStart());

    realworldService
      .getArticles(page)
      .then((json) => {
        if ((json as ArticlesResponseType).articles) {
          dispatch(articlesIsChanged((json as ArticlesResponseType).articles));
          dispatch(articlesCountIsChanged((json as ArticlesResponseType).articlesCount));
        }
      })
      .catch((error) => dispatch(articlesLoadingError(error.message)))
      .finally(() => dispatch(articlesLoadingEnd()));
  };
};

export default articlesLoading;
