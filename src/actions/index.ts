import articlesLoading from './articles-loading';
import articlePageLoading from './article-page-loading';
import pageChanging from './page-changing';
import usersRegistration from './users-registration';
import usersAuthentication from './users-authentication';
import checkUsersAuthentication from './check-users-authentication';
import logouting from './logouting';
import usersEditing from './users-editing';
import addTagOnCreateArticlePage from './add-tag-on-create-article-page';
import deleteTagOnCreateArticlePage from './delete-tag-on-create-article-page';
import changeTagOnCreateArticlePage from './change-tag-on-create-article-page';
import creatingArticle from './creating-article';
import deletingArticle from './deleting-article';
import editingArticle from './editing-article';
import addTagOnEditArticlePage from './add-tag-on-edit-article-page';
import deleteTagOnEditArticlePage from './delete-tag-on-edit-article-page';
import changeTagOnEditArticlePage from './change-tag-on-edit-article-page';
import initEditArticlePage from './init-edit-article-page';
import {
  articlePageShowDeleteModalWindow,
  articlePageHideDeleteModalWindow,
} from './action-creators/article-page';
import likeButtonOnClick from './like-button-on-click';

const actions = {
  articlesLoading,
  articlePageLoading,
  pageChanging,
  usersRegistration,
  usersAuthentication,
  usersEditing,
  checkUsersAuthentication,
  logouting,
  addTagOnCreateArticlePage,
  deleteTagOnCreateArticlePage,
  changeTagOnCreateArticlePage,
  creatingArticle,
  deletingArticle,
  editingArticle,
  addTagOnEditArticlePage,
  deleteTagOnEditArticlePage,
  changeTagOnEditArticlePage,
  initEditArticlePage,
  articlePageShowDeleteModalWindow,
  articlePageHideDeleteModalWindow,
  likeButtonOnClick,
};

export default actions;
