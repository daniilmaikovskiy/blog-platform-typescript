import { ThunkActionWithState } from '../helper';
import { changedTagsInfoOnEditArticlePage } from './action-creators/edit-article-page';

type ActionTypes = ReturnType<typeof changedTagsInfoOnEditArticlePage>;

const changeTagOnEditArticlePage = (
  index: number,
  changedTagsInfoFragment: string
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      editArticlePage: { tagsInfo },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(index, changedTagsInfoFragment);

    dispatch(changedTagsInfoOnEditArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default changeTagOnEditArticlePage;
