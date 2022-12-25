const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_visible'
};

function showInputError(inputElement, formElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.add(config.errorClass);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

function hideInputError(inputElement, formElement, config) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(config.errorClass);
  errorElement.textContent = '';
  inputElement.classList.remove (config.inputErrorClass);
};

function checkInputValidity(inputElement, formElement, config) {
  if (inputElement.validity.valid) {
    hideInputError(inputElement, formElement, config);
  } else {
    showInputError(inputElement, formElement, config);
  };
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

function setEventListeners(config, formElement) {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => { 
        checkInputValidity(inputElement, formElement, config);
        toggleButtonState(inputList, buttonElement, config);
    });
  });
};

function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(config, formElement)
  });
};

enableValidation(validationConfig);