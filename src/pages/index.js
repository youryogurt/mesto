import './index.css';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { validationConfig } from '../utils/constants.js';

import { Section } from '../components/Section.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';

import { Api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

const editPopupButton = document.querySelector('.profile__popup-open');
const popupEdit = document.querySelector('.popup_type_editing');
const popupAddImage = document.querySelector('.popup_type_add-card');
const popupChangeAvatar = document.querySelector('.popup_type_change-avatar');
const popupDeleteCard = document.querySelector('.popup_type_delete-card');
const openAddFormButton = document.querySelector('.add-button');
const editForm = document.forms['editing'];
const addCardForm = document.forms['add-card'];
const changeAvatarForm = document.forms['change-avatar'];
const bigPhoto = document.querySelector('.popup_type_image');
const cardTemplate = document.querySelector('#card');
const container = document.querySelector('.gallery');
const openChangeAvatarButton = document.querySelector('.profile__change-avatar-button');

let currentUserId = '';

// добавление валидации
const validators = new Map([
  [editForm.name, new FormValidator(validationConfig, editForm)],
  [addCardForm.name, new FormValidator(validationConfig, addCardForm)],
  [changeAvatarForm.name, new FormValidator(validationConfig, changeAvatarForm)]
]);

validators.forEach((validator) => {
  validator.enableValidation();
});

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: 'aa16a549-ea43-4766-9300-1c2b0845ff0c',
    'Content-Type': 'application/json'
  }
};

const api = new Api(config);

const cardList = new Section({
  items: [],
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, container);

// отрисовка данных
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    currentUserId = userData._id;
    cardList.setItems(cards);
    cardList.renderItems();
  })
  .catch(err => {
    console.log('Error fetching user data:', err);
  });

function createCard(item) {
  const card = new Card(item.name, item.link, item.likes, item._id, item.owner._id, cardTemplate, handleCardClick, handleDeleteCard, handleLikeCard, handleDislikeCard);
  const cardElement = card.generateCard(currentUserId);
  return cardElement;
}

// открытие попапа с картинкой при клике на карточку
const popupWithImage = new PopupWithImage(bigPhoto);
popupWithImage.setEventListeners();

function handleCardClick() {
  popupWithImage.open(this._link, this._name);
}

// функционал с классом UserInfo
const userInfo = new UserInfo({
  userName: '.profile__full-name',
  userJob: '.profile__job',
  userAvatar: '.profile__avatar'
});

// сабмит формы редактирования профиля
function editFormSubmit(obj) {
  const { name, about } = popupWithEditForm.getInputValues();
  return api.setUserInfo(this._formValues)
  .then((res) => {
    popupWithEditForm.close();
    userInfo.setUserInfo(res);
  })
  .catch((err) => {
    console.log(err);
  });
};

// экземпляр попапа редактирования профиля
const popupWithEditForm = new PopupWithForm(popupEdit, editFormSubmit);

// открытие попапа редактирования формы
editPopupButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  popupWithEditForm.setInputValues({ name, about });
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
  validators.get(changeAvatarForm.name).resetValidation();
});

// сабмит формы изменения аватара
function changeAvatarFormSubmit() {
  const { avatar } = popupWithAvatarChangeForm.getInputValues();
  return api.changeAvatar(avatar)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupWithAvatarChangeForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

popupWithAvatarChangeForm.setEventListeners();

// сабмит формы добавления карточки
function addImageFormSubmit(obj) {
  return api.addCard(obj)
    .then((data) => {
      const cardElement = createCard(data);
      cardList.addItem(cardElement);
      popupWithAddImageForm.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

popupWithAddImageForm.setEventListeners();

// экземпляр попапа подтверждения удаления карточки
const popupWithDeleteAgreement = new PopupWithConfirmation(popupDeleteCard, deleteAgreementSubmit);

// удаление карточки
function handleDeleteCard(card) {
  popupWithDeleteAgreement.open(card);
}

function deleteAgreementSubmit(card) {
  api.deleteCard(card._cardId)
    .then(() => {
      card._card.remove();
      card= null;
      popupWithDeleteAgreement.close();
    })
    .catch((err) => {
      console.log(err);
    });
}

popupWithDeleteAgreement.setEventListeners();

// лайк карточки
function handleLikeCard(card) {
  api.likeCard(card._cardId)
    .then((data) => {
      card.toggleLikeCard(data);
      card.likeCounter.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleDislikeCard(card) {
  api.dislikeCard(card._cardId)
    .then((data) => {
      card.toggleLikeCard(data);
      card.likeCounter.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}
