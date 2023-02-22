import { data } from "autoprefixer";

export class Card {
  constructor(name, link, likes, cardId, ownerId, cardTemplate, handleCardClick, handleDeleteCard, handleLikeCard, handleDislikeCard) {
    this._cardTemplate = cardTemplate;
    this._card = this._createCard();
    this._image = this._card.querySelector('.gallery__image');
    this._deleteButton = this._card.querySelector('.gallery__delete-button');
    this._caption = this._card.querySelector('.gallery__caption');
    this._placeName = this._card.querySelector('.gallery__place-name');
    this._like = this._card.querySelector('.gallery__like-button');
    this._likeCounter = this._card.querySelector('.gallery__likes-count');
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._ownerId = ownerId;
    this._cardId = cardId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this.handleLikeCard = handleLikeCard;
    this.handleDislikeCard = handleDislikeCard;
    this._data = data;
  }
  
  _createCard() {
    return this._cardTemplate.content.querySelector('.gallery__card').cloneNode(true);
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
    if (this._like.classList.contains('gallery__like-button_active')) {
      this.handleDislikeCard(this);
    } else {
      this.handleLikeCard(this);
    }
  });

    this._deleteButton.addEventListener('click', () => {
      this.handleDeleteCard(this);
    });

    this._image.addEventListener('click', () => {
      this.handleCardClick(this._name, this._link);
    });
  }

  toggleLikeCard() {
    this._like.classList.toggle('gallery__like-button_active');
  }

  generateCard(currentUserId) {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._placeName.textContent = this._name;

    if (this._likes.some((like) => like._id === currentUserId)) {
      this._like.classList.add('gallery__like-button_active');
    } else {
      this._like.classList.remove('gallery__like-button_active');
    }

    if (this._ownerId === currentUserId) {
      this._deleteButton.classList.add('gallery__delete-button_visible');
    }

    this._setEventListeners();

    return this._card;
  }
}