import {
  CREATING_ARTICLE_DEFAULT_STATE,
  CREATING_ARTICLE_LOADING_ERROR,
  CREATING_ARTICLE_LOADING_START,
  CREATING_ARTICLE_LOADING_END,
  CREATING_ARTICLE_SUCCESS,
} from '../action-types';

export const creatingArticleDefaultState = () =>
  ({
    type: CREATING_ARTICLE_DEFAULT_STATE,
  } as const);

export const creatingArticleLoadingError = (message: string) =>
  ({
    type: CREATING_ARTICLE_LOADING_ERROR,
    message,
  } as const);

export const creatingArticleLoadingStart = () =>
  ({
    type: CREATING_ARTICLE_LOADING_START,
  } as const);

export const creatingArticleLoadingEnd = () =>
  ({
    type: CREATING_ARTICLE_LOADING_END,
  } as const);

export const creatingArticleSuccess = () =>
  ({
    type: CREATING_ARTICLE_SUCCESS,
  } as const);
