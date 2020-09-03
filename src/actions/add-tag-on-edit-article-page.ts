import {
  changedTagsInfoOnEditArticlePage,
  changedMaxTagIndexOnEditArticlePage,
} from './action-creators/edit-article-page';
import { ThunkActionWithState } from '../helper';

type ActionTypes =
  | ReturnType<typeof changedTagsInfoOnEditArticlePage>
  | ReturnType<typeof changedMaxTagIndexOnEditArticlePage>;

const addTagOnEditArticlePage = (): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      editArticlePage: { tagsInfo, maxTagIndex },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxTagIndex, '');

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnEditArticlePage(maxTagIndex + 1));
  };
};

export default addTagOnEditArticlePage;
