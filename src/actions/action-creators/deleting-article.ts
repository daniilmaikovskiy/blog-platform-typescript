import {
  DELETED_ARTICLE,
  DELETING_ARTICLE_LOADING_ERROR,
  DELETING_ARTICLE_LOADING_START,
  DELETING_ARTICLE_LOADING_END,
} from '../action-types';

export const deletedArticle = () =>
  ({
    type: DELETED_ARTICLE,
  } as const);

export const deletingArticleLoadingError = (message: string) =>
  ({
    type: DELETING_ARTICLE_LOADING_ERROR,
    message,
  } as const);

export const deletingArticleLoadingStart = () =>
  ({
    type: DELETING_ARTICLE_LOADING_START,
  } as const);

export const deletingArticleLoadingEnd = () =>
  ({
    type: DELETING_ARTICLE_LOADING_END,
  } as const);
