import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popup, handlerFormSubmit) {
    super(popup);
    
    this.handlerFormSubmit = handlerFormSubmit;
    this._inputs = this._popup.querySelectorAll('.popup__text');
    this._form = this._popup.querySelector('.popup__container');
    this._submitButton = this._popup.querySelector('.popup__button');
  }

  getInputValues() {
    this._formValues = {};
    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.getInputValues();

      const initialButtonText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      this.handlerFormSubmit(this._formValues)
      .then(() => {
        this.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this._submitButton.textContent = initialButtonText;
      });
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}