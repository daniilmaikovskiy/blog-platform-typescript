import { ThunkActionWithState } from '../helper';
import { changedTagsInfoOnCreateArticlePage } from './action-creators/create-article-page';

type ActionTypes = ReturnType<typeof changedTagsInfoOnCreateArticlePage>;

const deleteTagOnCreateArticlePage = (index: number): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      createArticlePage: { tagsInfo },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.delete(index);

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default deleteTagOnCreateArticlePage;
