export type AuthorType = {
  username: string;
  bio: string | null;
  image: string | null;
  following: boolean;
};

export type ArticleType = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorType;
};

export type TagsInfoType = [number, string][];

export type ServerErrorsType = {
  [key: string]: string[];
};

export type ArticleFormSubmitDataType = {
  title: string;
  description: string;
  body: string;
};

export type ArticleFormDataType = {
  tagList: string[];
} & ArticleFormSubmitDataType;

export type UsersAuthenticationDataType = {
  email: string;
  password: string;
};

export type UsersEditingDataType = {
  username: string;
  email: string;
  password?: string;
  image?: string;
};

export type UsersRegistrationDataType = {
  username: string;
  email: string;
  password: string;
};

export type UsersRegistrationSubmitDataType = {
  repeatPassword: string;
} & UsersRegistrationDataType;

export interface ArticlesResponseType {
  articles: ArticleType[];
  articlesCount: number;
}

export interface ErrorsResponseType {
  errors: ServerErrorsType;
}

export interface SingleArticleResponseType {
  article: ArticleType;
}

export interface UserResponseType {
  user: {
    email: string;
    token: string;
    username: string;
    bio: null | string;
    image: null | string;
  };
}
