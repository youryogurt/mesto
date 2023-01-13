import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

// список карточек для загрузки страницы
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
const closeButtons = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup__container, .popup__image-container');

const editing = document.querySelector('.popup_type_editing');
const addImage = document.querySelector('.popup_type_add-card');

const fullName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__job');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const placeName = document.querySelector('#place-name');
const link = document.querySelector('#link');

const addCardBackground = document.querySelector('.add-card');
const openAddFormButton = document.querySelector('.add-button');
const createButton = addImage.querySelector('#create-button');

const gallery = document.querySelector('.gallery');

const editForm = document.forms['editing'];
const addCardForm = document.forms['add-card'];
const bigPhoto = document.querySelector('.popup_type_image');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

export const cardTemplate = document.querySelector('#card');

// добавление карточки на страницу
function addCard (name, link, append = false) {
  const card = new Card(name, link, cardTemplate);
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
  resetValidation(editing);
  openPopup(editing);

  inputName.value = fullName.textContent;
  inputJob.value = job.textContent;
});

openAddFormButton.addEventListener('click', function (event) {
  resetValidation(addImage);
  createButton.setAttribute('disabled', '');
  createButton.classList.add('popup__button_inactive');
  openPopup(addImage);
});

// сабмит формы редактирования профиля
editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  fullName.textContent = inputName.value;
  job.textContent = inputJob.value;

  const target = event.target;
  closePopup(target.closest('.popup'));
});

// сабмит формы добавления карточки
addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const placeNameValue = placeName.value;
  const linkValue = link.value;
  addCard(placeNameValue, linkValue);

  event.target.reset();

  const target = event.target;
  closePopup(target.closest('.popup'));
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

// сброс ошибок валидации
function resetValidation(form) {
  const spanErrors = Array.from(form.querySelectorAll('.popup__text-error'));
  spanErrors.forEach((error) => {
    error.textContent = '';
  });

  const inputs = Array.from(form.querySelectorAll('.popup__text'));
  inputs.forEach((input) => {
    input.classList.remove('popup__text_type_error');
  });
};

const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));

forms.forEach((form) => {
  const validation = new FormValidator(validationConfig, form);

  validation.enableValidation(validationConfig, FormValidator);
});