import {
  EDITING_ARTICLE_LOADING_ERROR,
  EDITING_ARTICLE_LOADING_START,
  EDITING_ARTICLE_LOADING_END,
  EDITING_ARTICLE_SUCCESS,
  EDITING_ARTICLE_DEFAULT_STATE,
} from '../action-types';

export const editingArticleDefaultState = () =>
  ({
    type: EDITING_ARTICLE_DEFAULT_STATE,
  } as const);

export const editingArticleLoadingError = (message: string) =>
  ({
    type: EDITING_ARTICLE_LOADING_ERROR,
    message,
  } as const);

export const editingArticleLoadingStart = () =>
  ({
    type: EDITING_ARTICLE_LOADING_START,
  } as const);

export const editingArticleLoadingEnd = () =>
  ({
    type: EDITING_ARTICLE_LOADING_END,
  } as const);

export const editingArticleSuccess = () =>
  ({
    type: EDITING_ARTICLE_SUCCESS,
  } as const);
