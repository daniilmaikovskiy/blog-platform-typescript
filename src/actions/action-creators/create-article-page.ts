import { TagsInfoType } from '../../types';
import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
} from '../action-types';

export const changedTagsInfoOnCreateArticlePage = (tagsInfo: TagsInfoType) =>
  ({
    type: CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
    tagsInfo,
  } as const);

export const changedMaxTagIndexOnCreateArticlePage = (maxTagIndex: number) =>
  ({
    type: CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
    maxTagIndex,
  } as const);
