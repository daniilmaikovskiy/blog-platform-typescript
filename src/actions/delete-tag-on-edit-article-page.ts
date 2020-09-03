import { ThunkActionWithState } from '../helper';
import { changedTagsInfoOnEditArticlePage } from './action-creators/edit-article-page';

type ActionTypes = ReturnType<typeof changedTagsInfoOnEditArticlePage>;

const deleteTagOnEditArticlePage = (index: number): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      editArticlePage: { tagsInfo },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.delete(index);

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default deleteTagOnEditArticlePage;
