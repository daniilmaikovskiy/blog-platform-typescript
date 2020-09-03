import React from 'react';
import Article from './components/article';
import { NUMBER_OF_ARTICLES_ON_PAGE as ARTICLES_ON_PAGE } from './global-settings';
import { StateType } from './types/state';

const selectors = {
  articleArray: ({ articles: { data }, isLogged }: StateType) =>
    data.map((el) => <Article key={el.slug} data={el} isLogged={isLogged} />),

  totalPages: ({ articles: { count } }: StateType) => Math.ceil(count / ARTICLES_ON_PAGE),

  page: ({ articles: { page } }: StateType) => page,
  articlesLoadingError: ({ articles: { error } }: StateType) => error,
  articlesLoadingErrorMessage: ({ articles: { errorMessage } }: StateType) => errorMessage,
  articlesOnLoading: ({ articles: { loading } }: StateType) => loading,

  isLogged: ({ isLogged }: StateType) => isLogged,

  createArticlePageTagsInfo: ({ createArticlePage: { tagsInfo } }: StateType) => new Map(tagsInfo),

  editArticlePageTagsInfo: ({ editArticlePage: { tagsInfo } }: StateType) => new Map(tagsInfo),

  currentArticlePage: ({ articlePage: { current } }: StateType) => current,
  articlePageLoadingError: ({ articlePage: { error } }: StateType) => error,
  articlePageLoadingErrorMessage: ({ articlePage: { errorMessage } }: StateType) => errorMessage,
  articlePageOnLoading: ({ articlePage: { loading } }: StateType) => loading,
  articlePageDeleteModalWindowIsShowed: ({
    articlePage: { deleteModalWindowIsShowed },
  }: StateType) => deleteModalWindowIsShowed,

  usersRegistrationLoadingError: ({ usersRegistration: { error } }: StateType) => error,
  usersRegistrationErrorMessage: ({ usersRegistration: { errorMessage } }: StateType) =>
    errorMessage,
  usersRegistrationLoading: ({ usersRegistration: { loading } }: StateType) => loading,
  usersRegistrationErrors: ({ usersRegistration: { errors } }: StateType) => errors,

  usersAuthenticationLoading: ({ usersAuthentication: { loading } }: StateType) => loading,
  usersAuthenticationLoadingError: ({ usersAuthentication: { error } }: StateType) => error,
  usersAuthenticationErrorMessage: ({ usersAuthentication: { errorMessage } }: StateType) =>
    errorMessage,
  usersAuthenticationErrors: ({ usersAuthentication: { errors } }: StateType) => errors,

  usersEditingLoading: ({ usersEditing: { loading } }: StateType) => loading,
  usersEditingLoadingError: ({ usersEditing: { error } }: StateType) => error,
  usersEditingErrorMessage: ({ usersEditing: { errorMessage } }: StateType) => errorMessage,
  usersEditingErrors: ({ usersEditing: { errors } }: StateType) => errors,
  usersEditingSuccessObj: ({ usersEditing: { successObj } }: StateType) => successObj,

  creatingArticleLoading: ({ creatingArticle: { loading } }: StateType) => loading,
  creatingArticleLoadingError: ({ creatingArticle: { error } }: StateType) => error,
  creatingArticleErrorMessage: ({ creatingArticle: { errorMessage } }: StateType) => errorMessage,
  creatingArticleSuccess: ({ creatingArticle: { success } }: StateType) => success,

  deletingArticleLoading: ({ deletingArticle: { loading } }: StateType) => loading,
  deletingArticleLoadingError: ({ deletingArticle: { error } }: StateType) => error,
  deletingArticleErrorMessage: ({ deletingArticle: { errorMessage } }: StateType) => errorMessage,

  editingArticleLoading: ({ editingArticle: { loading } }: StateType) => loading,
  editingArticleLoadingError: ({ editingArticle: { error } }: StateType) => error,
  editingArticleErrorMessage: ({ editingArticle: { errorMessage } }: StateType) => errorMessage,
  editingArticleSuccess: ({ editingArticle: { success } }: StateType) => success,
};

export default selectors;
