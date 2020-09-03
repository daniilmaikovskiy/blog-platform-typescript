import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import classes from './create-article-page.module.scss';
import ArticleForm from '../article-form';
import selectors from '../../selectors';
import actions from '../../actions';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';
import RealworldServiceContext from '../realworld-service-context';
import { ROOT, USER_DATA_COOKIE_NAME } from '../../global-settings';
import { ArticleFormSubmitDataType } from '../../types';

const CreateArticlePage = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);

  const tagsInfo = useSelector(selectors.createArticlePageTagsInfo);
  const error = useSelector(selectors.creatingArticleLoadingError);
  const errorMessage = useSelector(selectors.creatingArticleErrorMessage);
  const loading = useSelector(selectors.creatingArticleLoading);
  const success = useSelector(selectors.creatingArticleSuccess);
  const isLogged = useSelector(selectors.isLogged);
  const currentArticlePage = useSelector(selectors.currentArticlePage);

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!Cookies.get(USER_DATA_COOKIE_NAME) && !isLogged) {
    return <Redirect to={`${ROOT}/sign-in`} />;
  }

  if (success) {
    if (currentArticlePage === null) {
      throw new Error("articlePage.current shouldn't === null when articlePage is created");
    }

    return <Redirect to={`${ROOT}/articles/${currentArticlePage.slug}/`} />;
  }

  const onSubmit = (data: ArticleFormSubmitDataType) => {
    const tagList = Array.from(tagsInfo.values());

    dispatch(actions.creatingArticle(realworldService, { ...data, tagList }));
  };
  const addTag = () => dispatch(actions.addTagOnCreateArticlePage());
  const deleteTag = (key: number) => dispatch(actions.deleteTagOnCreateArticlePage(key));
  const changeTag = (key: number, value: string) =>
    dispatch(actions.changeTagOnCreateArticlePage(key, value));

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Create new article</h2>
      <ArticleForm
        tagsInfo={tagsInfo}
        addTag={addTag}
        deleteTag={deleteTag}
        changeTag={changeTag}
        onSubmit={onSubmit}
        defaultBody=""
        defaultTitle=""
        defaultDescription=""
      />
    </div>
  );
};

export default CreateArticlePage;
