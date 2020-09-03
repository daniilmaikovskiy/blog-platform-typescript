import { ArticleType } from '../../types';
import {
  ARTICLES_IS_CHANGED,
  ARTICLES_COUNT_IS_CHANGED,
  ARTICLES_LOADING_ERROR,
  ARTICLES_LOADING_START,
  ARTICLES_LOADING_END,
  PAGE_IS_CHANGED,
} from '../action-types';

export const articlesIsChanged = (articles: ArticleType[]) =>
  ({
    type: ARTICLES_IS_CHANGED,
    articles,
  } as const);

export const articlesCountIsChanged = (articlesCount: number) =>
  ({
    type: ARTICLES_COUNT_IS_CHANGED,
    articlesCount,
  } as const);

export const articlesLoadingError = (message: string) =>
  ({
    type: ARTICLES_LOADING_ERROR,
    message,
  } as const);

export const articlesLoadingStart = () =>
  ({
    type: ARTICLES_LOADING_START,
  } as const);

export const articlesLoadingEnd = () =>
  ({
    type: ARTICLES_LOADING_END,
  } as const);

export const pageIsChanged = (page: number) =>
  ({
    type: PAGE_IS_CHANGED,
    page,
  } as const);
