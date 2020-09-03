import {
  DELETING_ARTICLE_LOADING_ERROR,
  DELETING_ARTICLE_LOADING_START,
  DELETING_ARTICLE_LOADING_END,
  DELETED_ARTICLE,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/deleting-article';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
};

export type DeletingArticleStateType = typeof initialState;

const deletingArticle = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case DELETING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case DELETING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case DELETING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case DELETED_ARTICLE:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default deletingArticle;
