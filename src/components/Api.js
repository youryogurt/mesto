export class Api {
  constructor(options) {
    this.options = options;
  }
  
  async _getInfo(slug) {
    const res = await fetch(`${this.options.baseUrl}/${slug}`, {
      headers: this.options.headers
    });
    if (res.ok) {
      return res.json();
    }
    return await Promise.reject(`Ошибка: ${res.status}`);
  }

  async getInitialCards() {
    return await this._getInfo('cards');
  }

  async getUserInfo() {
    return await this._getInfo('users/me');
  }
}