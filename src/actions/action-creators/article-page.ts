import { ArticleType } from '../../types';
import {
  ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  ARTICLE_PAGE_IS_CHANGED,
  ARTICLE_PAGE_LOADING_ERROR,
  ARTICLE_PAGE_LOADING_START,
  ARTICLE_PAGE_LOADING_END,
} from '../action-types';

export const articlePageHideDeleteModalWindow = () =>
  ({
    type: ARTICLE_PAGE_HIDE_DELETE_MODAL_WINDOW,
  } as const);

export const articlePageShowDeleteModalWindow = () =>
  ({
    type: ARTICLE_PAGE_SHOW_DELETE_MODAL_WINDOW,
  } as const);

export const articlePageIsChanged = (articlePage: ArticleType) =>
  ({
    type: ARTICLE_PAGE_IS_CHANGED,
    articlePage,
  } as const);

export const articlePageLoadingError = (message: string) =>
  ({
    type: ARTICLE_PAGE_LOADING_ERROR,
    message,
  } as const);

export const articlePageLoadingStart = () =>
  ({
    type: ARTICLE_PAGE_LOADING_START,
  } as const);

export const articlePageLoadingEnd = () =>
  ({
    type: ARTICLE_PAGE_LOADING_END,
  } as const);
