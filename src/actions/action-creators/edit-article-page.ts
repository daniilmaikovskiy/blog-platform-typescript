import {
  CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
} from '../action-types';
import { TagsInfoType } from '../../types';

export const changedTagsInfoOnEditArticlePage = (tagsInfo: TagsInfoType) =>
  ({
    type: CHANGED_TAGS_INFO_ON_EDIT_ARTICLE_PAGE,
    tagsInfo,
  } as const);

export const changedMaxTagIndexOnEditArticlePage = (maxTagIndex: number) =>
  ({
    type: CHANGED_MAX_TAG_INDEX_ON_EDIT_ARTICLE_PAGE,
    maxTagIndex,
  } as const);
