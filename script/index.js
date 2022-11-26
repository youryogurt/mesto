const popupBackground = document.querySelector('.popup');
const openPopupButton = document.querySelector('.profile__popup-open');
const closePopupButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup__container');

const fullName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__job');

const inputName = document.querySelector('#name');
const inputJob = document.querySelector('#job');

// загрузка страницы
window.addEventListener("DOMContentLoaded", function () {
  inputName.setAttribute('value', fullName.textContent);
  inputJob.setAttribute('value', inputJob.textContent);
});

// открытие формы
openPopupButton.addEventListener('click', function (event) {
  inputName.value = fullName.textContent;
  inputJob.value = job.textContent;

  popupBackground.classList.add('popup_opened')
});

// сабмит формы
popup.addEventListener('submit', function (event) {
  event.preventDefault();

  fullName.textContent = inputName.value;
  job.textContent = inputJob.value;

  inputName.setAttribute('value', fullName.textContent);
  inputJob.setAttribute('value', inputJob.textContent);

  popupBackground.classList.remove('popup_opened');
});

// закрытие попапа по кнопке и по клику за пределами формы
function closePopup () {
  popupBackground.classList.remove('popup_opened');
}

closePopupButton.addEventListener('click', closePopup);
popupBackground.addEventListener('click', closePopup);

popup.addEventListener('click', function (event) {
  event.stopPropagation();
});