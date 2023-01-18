import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, validationConfig } from './constants.js';

const popupBackgrounds = document.querySelectorAll('.popup');
const editPopupButton = document.querySelector('.profile__popup-open');

const popupEdit = document.querySelector('.popup_type_editing');
const popupAddImage = document.querySelector('.popup_type_add-card');

const fullName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__job');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const placeName = document.querySelector('#place-name');
const link = document.querySelector('#link');

const openAddFormButton = document.querySelector('.add-button');
const createButton = popupAddImage.querySelector('#create-button');

const gallery = document.querySelector('.gallery');

const editForm = document.forms['editing'];
const addCardForm = document.forms['add-card'];
const bigPhoto = document.querySelector('.popup_type_image');

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

const cardTemplate = document.querySelector('#card');

const validators = new Map([
  [editForm.name, new FormValidator(validationConfig, editForm)],
  [addCardForm.name, new FormValidator(validationConfig, addCardForm)]
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
  validators.get(editForm.name).resetValidation();
  openPopup(popupEdit);

  inputName.value = fullName.textContent;
  inputJob.value = job.textContent;
});

openAddFormButton.addEventListener('click', function (event) {
  validators.get(addCardForm.name).resetValidation();
  createButton.setAttribute('disabled', '');
  createButton.classList.add('popup__button_inactive');
  openPopup(popupAddImage);
});

// открытие попапа с картинкой
function openPopupImage(name, link) {

    popupImage.setAttribute('src', link);
    popupImage.setAttribute('alt', name);
    popupCaption.textContent = name;
    
    openPopup(bigPhoto);
};

// сабмит формы редактирования профиля
editForm.addEventListener('submit', function (event) {
  event.preventDefault();

  fullName.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopup(popupEdit);
});

// сабмит формы добавления карточки
addCardForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const placeNameValue = placeName.value;
  const linkValue = link.value;
  addCard(placeNameValue, linkValue);

  closePopup(popupAddImage);
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