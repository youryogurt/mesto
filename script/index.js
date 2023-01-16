import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './constants.js';

//объект настроек с селекторами и классами формы
const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error_visible'
};

const popupBackgrounds = document.querySelectorAll('.popup');
const editPopupButton = document.querySelector('.profile__popup-open');

const editing = document.querySelector('.popup_type_editing');
const addImage = document.querySelector('.popup_type_add-card');

const fullName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__job');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const placeName = document.querySelector('#place-name');
const link = document.querySelector('#link');

const openAddFormButton = document.querySelector('.add-button');
const createButton = addImage.querySelector('#create-button');

const gallery = document.querySelector('.gallery');

const popupEdit = document.forms['editing'];
const popupAddImage = document.forms['add-card'];
const bigPhoto = document.querySelector('.popup_type_image');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const cardTemplate = document.querySelector('#card');

const validators = new Map([
  [popupEdit.name, new FormValidator(validationConfig, popupEdit)],
  [popupAddImage.name, new FormValidator(validationConfig, popupAddImage)]
]);

// добавление карточки на страницу
function addCard (name, link, append = false) {
  const card = new Card(name, link, cardTemplate, openPopupImage);
  const cardElement = card.generateCard();
  if (append) {
    gallery.append(cardElement);
  } else {
    gallery.prepend(cardElement);
  }
};

initialCards.forEach((cardData) => {
  addCard(cardData.name, cardData.link, true);
});

// открытие попапа
function openPopup(element) {
  document.addEventListener('keydown', closePopupEsc);
  element.classList.add('popup_opened');
};

editPopupButton.addEventListener('click', function (event) {
  validators.get(popupEdit.name).resetValidation();
  openPopup(editing);

  inputName.value = fullName.textContent;
  inputJob.value = job.textContent;
});

openAddFormButton.addEventListener('click', function (event) {
  validators.get(popupAddImage.name).resetValidation();
  createButton.setAttribute('disabled', '');
  createButton.classList.add('popup__button_inactive');
  openPopup(addImage);
});

// открытие попапа с картинкой
function openPopupImage(name, link) {

    popupImage.setAttribute('src', link);
    popupImage.setAttribute('alt', name);
    popupCaption.textContent = name;
    
    openPopup(bigPhoto);
};

// сабмит формы редактирования профиля
popupEdit.addEventListener('submit', function (event) {
  event.preventDefault();

  fullName.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopup(popupEdit.parentNode);
});

// сабмит формы добавления карточки
popupAddImage.addEventListener('submit', function (event) {
  event.preventDefault();
  const placeNameValue = placeName.value;
  const linkValue = link.value;
  addCard(placeNameValue, linkValue);

  closePopup(popupAddImage.parentNode);
});

// закрытие попапа по кнопке и по клику за пределами формы
function closePopup(element) {
  document.removeEventListener('keydown', closePopupEsc);
  element.classList.remove('popup_opened');
};

popupBackgrounds.forEach((popupBackground) => {
  popupBackground.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popupBackground)
    }
  });
});

// закрытие попапа по Esc
function closePopupEsc (evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup)};
};

validators.forEach((validator) => {
  validator.enableValidation();
});