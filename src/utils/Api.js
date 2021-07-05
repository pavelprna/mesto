class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _request(param) {
    return fetch(this._baseUrl + param.path, {
      method: param.method,
      headers: this._headers,
      body: param.body,
    })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}: ${param.error}`);
        });
  }

  getUserInfo() {
    return this._request({
      method: 'GET',
      path: 'users/me',
      error: 'Не удалось получить данные о пользователе с сервера',
    });
  }

  getInitialCards() {
    return this._request({
      method: 'GET',
      path: 'cards',
      error: 'Не удалось получить карточки с сервера',
    });
  }

  editProfile(data) {
    return this._request({
      method: 'PATCH',
      path: 'users/me',
      body: JSON.stringify(data),
      error: 'Не удалось получить карточки с сервера',
    })
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25/',
  headers: {
    authorization: '04f57d96-9414-4d3f-8e70-9d8b878ddf47',
    // 'Content-Type': 'application/json'
  }
})