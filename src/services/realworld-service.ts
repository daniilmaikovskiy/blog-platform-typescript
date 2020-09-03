import {
  ArticlesResponseType,
  ErrorsResponseType,
  SingleArticleResponseType,
  UserResponseType,
} from '../types';
import { NUMBER_OF_ARTICLES_ON_PAGE as ARTICLES_NUMBER } from '../global-settings';

export default class RealworldService {
  rootUrl = 'https://conduit.productionready.io';

  url = `${this.rootUrl}/api`;

  getArticles = async (page = 1): Promise<ArticlesResponseType | ErrorsResponseType> => {
    const url = `${this.url}/articles`;

    return fetch(
      `${url}?limit=${ARTICLES_NUMBER}&offset=${ARTICLES_NUMBER * (page - 1)}`
    ).then((response) => response.json());
  };

  getSingleArticle = async (
    slug: string
  ): Promise<SingleArticleResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/articles/${slug}`).then((response) => response.json());

  newUsersRegistration = async (body: string): Promise<UserResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/users`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => response.json());

  usersAuthentication = async (body: string): Promise<UserResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/users/login`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    }).then((response) => response.json());

  // Accepted fields: email, username, password, image, bio
  updateUser = async (
    body: string,
    token: string
  ): Promise<UserResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/user`, {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  createArticle = async (
    body: string,
    token: string
  ): Promise<SingleArticleResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/articles`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  deleteArticle = async (slug: string, token: string): Promise<void> =>
    fetch(`${this.url}/articles/${slug}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  updateArticle = async (
    slug: string,
    token: string,
    body: string
  ): Promise<ArticlesResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/articles/${slug}`, {
      method: 'PUT',
      body,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  favoriteArticle = async (
    slug: string,
    token: string
  ): Promise<SingleArticleResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/articles/${slug}/favorite`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());

  unfavoriteArticle = async (
    slug: string,
    token: string
  ): Promise<SingleArticleResponseType | ErrorsResponseType> =>
    fetch(`${this.url}/articles/${slug}/favorite`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`,
      },
    }).then((response) => response.json());
}
