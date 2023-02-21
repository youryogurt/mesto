export class Card {
  constructor(name, link, likes, cardId, ownerId, cardTemplate, handleCardClick, handleDeleteCard) {
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
  }
  
  _createCard() {
    return this._cardTemplate.content.querySelector('.gallery__card').cloneNode(true);
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this);
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('gallery__like-button_active');
  }

  // _handleDeleteCard() {
  //   this._card.remove();
  // }

  generateCard(currentUserId) {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeCounter.textContent = this._likes.length;
    this._placeName.textContent = this._name;

    if (this._ownerId === currentUserId) {
      this._deleteButton.classList.add('gallery__delete-button_visible');
    }

    this._setEventListeners();

    return this._card;
  }
}