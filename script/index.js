const popupBackground = document.querySelector('.popup');
const openPopupButton = document.querySelector('.popup-open');
const closePopupButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup__container');

// открытие формы
openPopupButton.addEventListener('click', function (event) {
  popupBackground.classList.add('popup_opened')
});

// сабмит формы
popup.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('.profile__full-name');
  const job = document.querySelector('.profile__job');

  name.textContent = document.querySelector('#name').value;
  job.textContent = document.querySelector('#job').value;

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