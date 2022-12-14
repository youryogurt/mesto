// import { initialCards, cardTemplate } from './index.js';

export class Card {
  constructor(name, link, cardTemplate) {
    this._card = cardTemplate.content.querySelector('.gallery__card').cloneNode(true);
    this._image = this._card.querySelector('.gallery__image');
    this._deleteButton = this._card.querySelector('.gallery__delete-button');
    this._caption = this._card.querySelector('.gallery__caption');
    this._placeName = this._card.querySelector('.gallery__place-name');
    this._like = this._card.querySelector('.gallery__like');
    this._link = link;
    this._name = name;
  }
  
  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('gallery__like_active');
  }

  _handleDeleteCard() {
    this._card.remove();
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._placeName.textContent = this._name;
    this._setEventListeners();

    return this._card;
  }
}