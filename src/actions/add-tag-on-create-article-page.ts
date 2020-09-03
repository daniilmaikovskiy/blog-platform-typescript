import {
  changedTagsInfoOnCreateArticlePage,
  changedMaxTagIndexOnCreateArticlePage,
} from './action-creators/create-article-page';
import { ThunkActionWithState } from '../helper';

type ActionTypes =
  | ReturnType<typeof changedTagsInfoOnCreateArticlePage>
  | ReturnType<typeof changedMaxTagIndexOnCreateArticlePage>;

const addTagOnCreateArticlePage = (): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      createArticlePage: { tagsInfo, maxTagIndex },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(maxTagIndex, '');

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
    dispatch(changedMaxTagIndexOnCreateArticlePage(maxTagIndex + 1));
  };
};

export default addTagOnCreateArticlePage;
