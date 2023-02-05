import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(selector, handlerFormSubmit) {
    super(selector);
    
    this._handlerFormSubmit = handlerFormSubmit;
    this._inputs = this._popup.querySelectorAll('.popup__text');
    this._form = this._popup.querySelector('.popup__container');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerFormSubmit();
      this.close();
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}