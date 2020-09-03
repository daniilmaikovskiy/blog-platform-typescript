import {
  EDITING_ARTICLE_LOADING_ERROR,
  EDITING_ARTICLE_LOADING_START,
  EDITING_ARTICLE_LOADING_END,
  EDITING_ARTICLE_SUCCESS,
  EDITING_ARTICLE_DEFAULT_STATE,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/editing-article';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

export type EditingArticleStateType = typeof initialState;

const editingArticle = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case EDITING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case EDITING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case EDITING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case EDITING_ARTICLE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case EDITING_ARTICLE_DEFAULT_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export default editingArticle;
