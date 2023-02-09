export class FormValidator {
  constructor(config, formElement) {
    this._form = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._spanErrors = Array.from(formElement.querySelectorAll(config.spanErrorSelector));
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  }

  _showInputError(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(this._inputErrorClass);
  };

  _hideInputError(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
    inputElement.classList.remove(this._inputErrorClass);
  };

  _checkInputValidity(inputElement) {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement)
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  };

  _toggleButtonState(){
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => { 
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
      });
    });
  }
  
  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      this._hideInputError(input)
    });

  }

  enableValidation() {
    this._setEventListeners()
  }
}
