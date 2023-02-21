const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export class Api {
  constructor(config) {
    this.baseUrl = config.baseUrl;
    this.headers = config.headers;
  }

  async _fetch(slug, method, body) {
    const res = await fetch(`${this.baseUrl}/${slug}`, {
      method: method,
      headers: this.headers,
      body: JSON.stringify(body)
    });
    return handleResponse(res);
  }

  async getInitialCards() {
    return await this._fetch('cards', 'GET');
  }

  async getUserInfo() {
    return await this._fetch('users/me', 'GET');
  }

  async setUserInfo(data) {
    return await this._fetch('users/me', 'PATCH', data);
  }

  async addCard(data) {
    return await this._fetch('cards', 'POST', data);
  }

  async changeAvatar(avatarUrl) {
    const avatar = {avatar: avatarUrl};
    return await this._fetch('users/me/avatar', 'PATCH', avatar);
  }

  async deleteCard(cardId) {
    return await this._fetch(`cards/${cardId}`, 'DELETE');
  }

  async toggleLike(cardId, isLiked) {
    return await this._fetch(`cards/likes/${cardId}`, isLiked ? 'PUT' : 'DELETE');
  }
}