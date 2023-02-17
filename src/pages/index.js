import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards, validationConfig } from '../utils/constants.js';

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

import { Api } from '../components/Api.js';

const editPopupButton = document.querySelector('.profile__popup-open');

const popupEdit = document.querySelector('.popup_type_editing');
const popupAddImage = document.querySelector('.popup_type_add-card');
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const openAddFormButton = document.querySelector('.add-button');

const editForm = document.forms['editing'];
const addCardForm = document.forms['add-card'];
const changeAvatarForm = document.forms['change-avatar'];
const bigPhoto = document.querySelector('.popup_type_image');

const cardTemplate = document.querySelector('#card');

const container = document.querySelector('.gallery');

const openChangeAvatarButton = document.querySelector('.profile__avatar-wrapper');

// добавление валидации
const validators = new Map([
  [editForm.name, new FormValidator(validationConfig, editForm)],
  [addCardForm.name, new FormValidator(validationConfig, addCardForm)],
  [changeAvatarForm.name, new FormValidator(validationConfig, changeAvatarForm)]
]);

validators.forEach((validator) => {
  validator.enableValidation();
});

// добавляю рефакторинг 8 спринта
function createCard(item) {
  const card = new Card(item.name, item.link, item.likes, item.owner._id, cardTemplate, handleCardClick);
  const cardElement = card.generateCard(item.owner._id);
  return cardElement;
}

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'aa16a549-ea43-4766-9300-1c2b0845ff0c',
    'Content-Type': 'application/json'
  }
};

const api = new Api(config);

// отрисовка карточек на странице
api.getInitialCards()
  .then((data) => {
    const cardList = new Section({
      items: data,
      renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
      }
    }, container);
cardList.renderItems();
})
.catch((err) => {
  console.log(err);
});

// отрисовка данных пользователя
api.getUserInfo()
.then(data => {
  userInfo.setUserInfo(data);
  const userAvatar = document.querySelector('.profile__avatar');
  userAvatar.src = data.avatar;
  userAvatar.alt = data.name;
  })
  .catch(err => {
    console.log('Error fetching user data:', err);
  });

// открытие попапа с картинкой при клике на карточку
const popupWithImage = new PopupWithImage(bigPhoto);
popupWithImage.setEventListeners();

function handleCardClick() {
  popupWithImage.open(this._link, this._name);
}

// функционал с классом UserInfo
const userInfo = new UserInfo({
  userName: '.profile__full-name',
  userJob: '.profile__job'
});

function editFormSubmit(obj) {
  userInfo.setUserInfo(obj);
};

// экземпляр попапа редактирования профиля
const popupWithEditForm = new PopupWithForm(popupEdit, editFormSubmit);

// открытие попапа редактирования формы
editPopupButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputJob.value = about;
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

// экземпляр попапа изменения аватара
const popupWithAvatarChangeForm = new PopupWithForm(popupChangeAvatar, changeAvatarFormSubmit);

// открытие попапа изменения аватара
openChangeAvatarButton.addEventListener('click', () => {
  popupWithAvatarChangeForm.open();
  validators.get(editForm.name).resetValidation();
});

// сабмит формы изменения аватара
function changeAvatarFormSubmit() {
  const inputAvatar = document.querySelector('#avatar-link');
  const avatar = inputAvatar.value;
  api.changeAvatar(avatar)
    .then((data) => {
      const userAvatar = document.querySelector('.profile__avatar');
      userAvatar.src = data.avatar;
      userAvatar.alt = data.name;
      popupWithAvatarChangeForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

popupWithAvatarChangeForm.setEventListeners();

// сабмит формы добавления карточки, но тут есть проблема, что я создаю cardList дважды
function addImageFormSubmit(obj) {
  api.addCard(obj)
    .then((data) => {
      const cardElement = createCard(data);
      const cardList = new Section({
        items: data,
        renderer: (item) => {
          const cardElement = createCard(item);
          cardList.addItem(cardElement);
        }
      }, container);
      cardList.addItem(cardElement);
      popupWithAddImageForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

popupWithAddImageForm.setEventListeners();