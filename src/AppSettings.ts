export const server = 'https://localhost:44386';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'https://nika-kldiashvili.eu.auth0.com/',
  client_id: 'ajKIXec08g0ZX3Mr80woHtX6G2zTaeGr',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
