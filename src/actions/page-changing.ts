import { ThunkActionWithState } from '../helper';
import articlesLoading from './articles-loading';
import RealworldService from '../services/realworld-service';
import { pageIsChanged } from './action-creators/articles';

type ActionTypes = ReturnType<typeof pageIsChanged>;

const pageChanging = (
  realworldService: RealworldService,
  page: number
): ThunkActionWithState<ActionTypes> => {
  return async (dispatch) => {
    dispatch(articlesLoading(realworldService, page));
    dispatch(pageIsChanged(page));
  };
};

export default pageChanging;
