import { Popup } from './Popup.js';

export class PopupWithButton extends Popup {
  constructor(popup, handlerButtonSubmit) {
    super(popup);
    this._handlerButtonSubmit = handlerButtonSubmit;
    this._button = this._popup.querySelector('.popup__button');
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._handlerButtonSubmit(this._card);
      this.close();
    })
  }

  open(card) {
    super.open();
    this._card = card;
  }
}