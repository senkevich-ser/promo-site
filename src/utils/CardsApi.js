export const MOVIES_URL = 'https://dummyjson.com';

class CardsApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  async getAllCards() {
    const res = await fetch(`${this._baseUrl}/products`, {
      method: 'GET',
      headers: this._headers
    });
    return this._handleResponse(res);
  }
}

const cardsApi = new CardsApi({
  baseUrl: MOVIES_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default cardsApi;