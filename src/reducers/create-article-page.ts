import {
  CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE,
  CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE,
} from '../actions/action-types';
import * as actions from '../actions/action-creators/create-article-page';
import InferValueTypes from '../types/infer-value-types';
import { TagsInfoType } from '../types';

const initialState = {
  tagsInfo: [[0, '']] as TagsInfoType,
  maxTagIndex: 1,
};

export type CreateArticlePageStateType = typeof initialState;

const createArticlePage = (
  state = initialState,
  action: ReturnType<InferValueTypes<typeof actions>>
) => {
  switch (action.type) {
    case CHANGED_TAGS_INFO_ON_CREATE_ARTICLE_PAGE:
      return { ...state, tagsInfo: action.tagsInfo };
    case CHANGED_MAX_TAG_INDEX_ON_CREATE_ARTICLE_PAGE:
      return { ...state, maxTagIndex: action.maxTagIndex };
    default:
      return state;
  }
};

export default createArticlePage;
