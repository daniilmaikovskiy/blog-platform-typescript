import { ThunkActionWithState } from '../helper';
import { changedTagsInfoOnCreateArticlePage } from './action-creators/create-article-page';

type ActionTypes = ReturnType<typeof changedTagsInfoOnCreateArticlePage>;

const changeTagOnCreateArticlePage = (
  index: number,
  changedTagsInfoFragment: string
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch, getState) => {
    const {
      createArticlePage: { tagsInfo },
    } = getState();
    const newTagsInfo = new Map(tagsInfo);

    newTagsInfo.set(index, changedTagsInfoFragment);

    dispatch(changedTagsInfoOnCreateArticlePage(Array.from(newTagsInfo.entries())));
  };
};

export default changeTagOnCreateArticlePage;
