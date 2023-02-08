import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards, validationConfig } from '../utils/constants.js';

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

const editPopupButton = document.querySelector('.profile__popup-open');

const popupEdit = document.querySelector('.popup_type_editing');
const popupAddImage = document.querySelector('.popup_type_add-card');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const openAddFormButton = document.querySelector('.add-button');

const editForm = document.forms['editing'];
const addCardForm = document.forms['add-card'];
const bigPhoto = document.querySelector('.popup_type_image');

const cardTemplate = document.querySelector('#card');

const containerSelector = document.querySelector('.gallery');

// добавление валидации
const validators = new Map([
  [editForm.name, new FormValidator(validationConfig, editForm)],
  [addCardForm.name, new FormValidator(validationConfig, addCardForm)]
]);

validators.forEach((validator) => {
  validator.enableValidation();
});

// добавляю рефакторинг 8 спринта

function createCard(obj) {
  const card = new Card(obj.name, obj.link, cardTemplate, handleCardClick);
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

// отрисовка карточек на странице
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    createCard(item);
  }
}, containerSelector)

cardList.renderItems();

// открытие попапа с картинкой при клике на карточку
function handleCardClick() {
  const popupWithImage = new PopupWithImage(bigPhoto);
  popupWithImage.setEventListeners();
  popupWithImage.open(this._link, this._name);
}

// функционал с классом UserInfo
const userInfo = new UserInfo({
  userNameSelector: '.profile__full-name',
  userJobSelector: '.profile__job'
});

function editFormSubmit(obj) {
  userInfo.setUserInfo(obj)
};

// экземпляр попапа редактирования профиля
const popupWithEditForm = new PopupWithForm(popupEdit, editFormSubmit);

// открытие попапа редактирования формы
editPopupButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  inputName.value = name;
  inputJob.value = job;
  popupWithEditForm.open();
  validators.get(editForm.name).resetValidation();
});

// сабмит формы редактирования профиля
popupWithEditForm.setEventListeners();

// экземпляр попапа добавления карточки
const popupWithAddImageForm = new PopupWithForm(popupAddImage, addImageFormSubmit);

// открытие попапа добавления карточки
openAddFormButton.addEventListener('click', () => {
  popupWithAddImageForm.open();
  validators.get(addCardForm.name).resetValidation();
})

// сабмит формы добавления карточки

function addImageFormSubmit(obj) {
  createCard(obj);
  popupWithAddImageForm.close();
}

popupWithAddImageForm.setEventListeners();