import {
  CREATING_ARTICLE_LOADING_ERROR,
  CREATING_ARTICLE_LOADING_START,
  CREATING_ARTICLE_LOADING_END,
  CREATING_ARTICLE_SUCCESS,
  CREATING_ARTICLE_DEFAULT_STATE,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/creating-article';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  success: false,
};

export type CreatingArticleStateType = typeof initialState;

const creatingArticle = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case CREATING_ARTICLE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case CREATING_ARTICLE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case CREATING_ARTICLE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case CREATING_ARTICLE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case CREATING_ARTICLE_DEFAULT_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

export default creatingArticle;
