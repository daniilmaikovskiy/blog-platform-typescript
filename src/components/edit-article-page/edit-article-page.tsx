import React, { useEffect, useContext, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import classes from './edit-article-page.module.scss';
import ArticleForm from '../article-form';
import selectors from '../../selectors';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import RealworldServiceContext from '../realworld-service-context';
import { ROOT, USER_DATA_COOKIE_NAME } from '../../global-settings';
import { ArticleFormSubmitDataType } from '../../types';

type Props = {
  slug: string;
};

const EditArticlePage: FC<Props> = ({ slug }) => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  useEffect(() => {
    dispatch(actions.articlePageLoading(realworldService, slug));
    dispatch(actions.initEditArticlePage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentArticlePage = useSelector(selectors.currentArticlePage);
  const articlePageError = useSelector(selectors.articlePageLoadingError);
  const articlePageErrorMessage = useSelector(selectors.articlePageLoadingErrorMessage);
  const articlePageLoading = useSelector(selectors.articlePageOnLoading);
  const editingArticleError = useSelector(selectors.editingArticleLoadingError);
  const editingArticleErrorMessage = useSelector(selectors.editingArticleErrorMessage);
  const editingArticleLoading = useSelector(selectors.editingArticleLoading);
  const editingArticleSuccess = useSelector(selectors.editingArticleSuccess);
  const isLogged = useSelector(selectors.isLogged);
  const tagsInfo = useSelector(selectors.editArticlePageTagsInfo);

  if (currentArticlePage === null) {
    return <ErrorAlert description="Server Error" />;
  }

  if (articlePageError) {
    return <ErrorAlert description={articlePageErrorMessage} />;
  }

  if (editingArticleError) {
    return <ErrorAlert description={editingArticleErrorMessage} />;
  }

  if (articlePageLoading || editingArticleLoading) {
    return <Spinner />;
  }

  if (!Cookies.get(USER_DATA_COOKIE_NAME) && !isLogged) {
    return <Redirect to={`${ROOT}/sign-in`} />;
  }

  if (editingArticleSuccess) {
    return <Redirect to={`${ROOT}/articles/${currentArticlePage.slug}/`} />;
  }

  const addTag = () => dispatch(actions.addTagOnEditArticlePage());
  const deleteTag = (key: number) => dispatch(actions.deleteTagOnEditArticlePage(key));
  const changeTag = (key: number, value: string) =>
    dispatch(actions.changeTagOnEditArticlePage(key, value));

  const onSubmit = (data: ArticleFormSubmitDataType) => {
    const tagList = Array.from(tagsInfo.values());

    dispatch(actions.editingArticle(realworldService, slug, { ...data, tagList }));
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Edit article</h2>
      <ArticleForm
        tagsInfo={tagsInfo}
        addTag={addTag}
        deleteTag={deleteTag}
        changeTag={changeTag}
        onSubmit={onSubmit}
        defaultTitle={currentArticlePage.title}
        defaultDescription={currentArticlePage.description}
        defaultBody={currentArticlePage.body}
      />
      {editingArticleSuccess && <h3 className={classes.success}>Article edited</h3>}
    </div>
  );
};

export default EditArticlePage;
