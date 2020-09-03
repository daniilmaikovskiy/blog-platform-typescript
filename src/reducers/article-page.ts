import {
  ARTICLE_PAGE_IS_CHANGED,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
  ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/article-page';
import { ArticleType } from '../types';
import InferValueTypes from '../types/infer-value-types';

const initialState = {
  current: null as ArticleType | null,
  loading: false,
  error: false,
  errorMessage: '',
  deleteModalWindowIsShowed: false,
};

export type ArticlePageStateType = typeof initialState;

const articlePage = (state = initialState, action: ReturnType<InferValueTypes<typeof actions>>) => {
  switch (action.type) {
    case ARTICLE_PAGE_IS_CHANGED:
      return {
        ...state,
        current: action.articlePage,
      };
    case ARTICLE_PAGE_LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case ARTICLE_PAGE_LOADING_END:
      return {
        ...state,
        loading: false,
      };
    case ARTICLE_PAGE_LOADING_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };
    case ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW:
      return {
        ...state,
        deleteModalWindowIsShowed: true,
      };
    case ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW:
      return {
        ...state,
        deleteModalWindowIsShowed: false,
      };
    default:
      return state;
  }
};

export default articlePage;
