// список карточек для загрузки страницы
const initialCards = [
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

const popupBackgrounds = document.querySelectorAll('.popup');
const editPopupButton = document.querySelector('.profile__popup-open');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popups = document.querySelectorAll('.popup__container');

const editing = document.querySelector('.popup_editing');
const addImage = document.querySelector('.popup_add-card');

const fullName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__job');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

const addCardBackground = document.querySelector('.add-card');
const openAddFormButton = document.querySelector('.add-button');

const likes = document.querySelectorAll('.gallery__like');

const gallery = document.querySelector('.gallery');

// загрузка страницы
function addCard (name, link, append = false) {
  const galleryCard = document.createElement('div');
  galleryCard.classList.add('gallery__card');

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', link);
  galleryImage.setAttribute('alt', name);
  
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('gallery__delete-button', 'button');
  deleteButton.setAttribute('type', 'button');

  const galleryCaption = document.createElement('div');
  galleryCaption.classList.add('gallery__caption');

  const placeName = document.createElement('p');
  placeName.classList.add('gallery__place-name');
  placeName.textContent = name;

  const likeButton = document.createElement('button');
  likeButton.classList.add('gallery__like', 'button');
  likeButton.setAttribute('type', 'button');

  galleryCaption.append(placeName, likeButton);

  galleryCard.append(galleryImage, deleteButton, galleryCaption);

  if (append) {
    gallery.append(galleryCard);
  } else {
    gallery.prepend(galleryCard);
  }
};

initialCards.forEach(function (element) {
  let name = element['name'];
  let link = element['link'];
  addCard(name, link, true);
});

window.addEventListener("DOMContentLoaded", function () {
  inputName.setAttribute('value', fullName.textContent);
  inputJob.setAttribute('value', inputJob.textContent);
});

// открытие формы
function openPopup(element) {
  element.classList.add('popup_opened');
}

editPopupButton.addEventListener('click', function (event) {
  openPopup(editing);
  
  inputName.value = fullName.textContent;
  inputJob.value = job.textContent;
});

openAddFormButton.addEventListener('click', function (event) {
  openPopup(addImage);
});

// сабмит формы
// popup.addEventListener('submit', function (event) {
//   event.preventDefault();

//   fullName.textContent = inputName.value;
//   job.textContent = inputJob.value;

//   inputName.setAttribute('value', fullName.textContent);
//   inputJob.setAttribute('value', inputJob.textContent);

//   popupBackground.classList.remove('popup_opened');
// });

// закрытие попапа по кнопке и по клику за пределами формы
function closePopup(element) {
  element.classList.remove('popup_opened');
}

closeButtons.forEach(function (element) {
  element.addEventListener('click', function (event) {
    let target = event.target;
    closePopup(target.closest('.popup'));
  })
});

popupBackgrounds.forEach(function (element) {
    element.addEventListener('click', function (event) {
      let target = event.target;
      closePopup(target.closest('.popup'));
    }
  )
});

popups.forEach(function (element) {
  element.addEventListener('click', function (event) {
      event.stopPropagation();
  })
});

// лайк
likes.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.target.classList.toggle('gallery__like_active');
  })
});