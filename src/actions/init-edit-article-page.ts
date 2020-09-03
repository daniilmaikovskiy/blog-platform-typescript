import { ThunkActionWithState } from '../helper';
import {
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
} from './action-creators/edit-article-page';

type ActionTypes =
  | ReturnType<typeof changedTagsInfoOnEditArticlePage>
  | ReturnType<typeof changedMaxTagIndexOnEditArticlePage>;

const initEditArticlePage = (): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      articlePage: { current },
    } = getState();

    if (current === null) {
      return;
    }

    const { tagList } = current;

    const maxTagIndex = tagList.length !== 0 ? tagList.length : 1;

    dispatch(changedMaxTagIndexOnEditArticlePage(maxTagIndex));

    const tagsMap = tagList.reduce((acc, el, i) => acc.set(i, el), new Map());
    let tagsInfo = Array.from(tagsMap.entries());

    if (tagsInfo.length === 0) {
      tagsInfo = [[0, '']];
    }

    dispatch(changedTagsInfoOnEditArticlePage(tagsInfo));
  };
};

export default initEditArticlePage;
