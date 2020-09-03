import { UsersEditingStateType } from '../reducers/users-editing';
import { UsersRegistrationStateType } from '../reducers/users-registration';
import { UsersAutheticationStateType } from '../reducers/users-authentication';
import { EditingArticleStateType } from '../reducers/editing-article';
import { IsLoggedStateType } from '../reducers/is-logged';
import { EditArticlePageStateType } from '../reducers/edit-article-page';
import { CreateArticlePageStateType } from '../reducers/create-article-page';
import { CreatingArticleStateType } from '../reducers/creating-article';
import { DeletingArticleStateType } from '../reducers/deleting-article';
import { ArticlePageStateType } from '../reducers/article-page';
import { ArticlesStateType } from '../reducers/articles';

export type StateType = {
  articles: ArticlesStateType;
  articlePage: ArticlePageStateType;
  createArticlePage: CreateArticlePageStateType;
  editArticlePage: EditArticlePageStateType;
  isLogged: IsLoggedStateType;
  creatingArticle: CreatingArticleStateType;
  editingArticle: EditingArticleStateType;
  deletingArticle: DeletingArticleStateType;
  usersAuthentication: UsersAutheticationStateType;
  usersRegistration: UsersRegistrationStateType;
  usersEditing: UsersEditingStateType;
};
