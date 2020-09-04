import { combineReducers } from 'redux';
import articlePage from './article-page';
import articles from './articles';
import createArticlePage from './create-article-page';
import editArticlePage from './edit-article-page';
import creatingArticle from './creating-article';
import deletingArticle from './deleting-article';
import editingArticle from './editing-article';
import isLogged from './is-logged';
import usersAuthentication from './users-authentication';
import usersEditing from './users-editing';
import usersRegistration from './users-registration';

const rootReducer = combineReducers({
  articlePage,
  articles,
  createArticlePage,
  editArticlePage,
  creatingArticle,
  deletingArticle,
  editingArticle,
  isLogged,
  usersAuthentication,
  usersEditing,
  usersRegistration,
});

export default rootReducer;
