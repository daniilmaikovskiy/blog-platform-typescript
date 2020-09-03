import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './articles.module.scss';
import RealworldServiceContext from '../realworld-service-context';
import actions from '../../actions';
import selectors from '../../selectors';
import PageController from '../page-controller';
import ErrorAlert from '../error-alert';
import Spinner from '../spinner';

const Articles = () => {
  const dispatch = useDispatch();
  const realworldService = useContext(RealworldServiceContext);
  const articleArray = useSelector(selectors.articleArray);
  const totalPages = useSelector(selectors.totalPages);
  const currentPage = useSelector(selectors.page);
  const error = useSelector(selectors.articlesLoadingError);
  const errorMessage = useSelector(selectors.articlesLoadingErrorMessage);
  const loading = useSelector(selectors.articlesOnLoading);

  useEffect(() => {
    if (!articleArray.length) {
      dispatch(actions.articlesLoading(realworldService));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <ErrorAlert description={errorMessage} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={classes.wrapper}>{articleArray}</div>
      <PageController
        total={totalPages}
        onChange={(page) => {
          dispatch(actions.pageChanging(realworldService, page));
        }}
        current={currentPage}
      />
    </>
  );
};

export default Articles;
