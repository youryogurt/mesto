const body = document.querySelector('body')

const popupBackground = document.querySelector('.popup');
const openPopupButton = document.querySelector('.popup-open');
const closePopupButton = document.querySelector('.popup__close-button');

openPopupButton.addEventListener('click', function (event) {
  event.preventDefault();
  popupBackground.classList.add('popup_opened')
});

closePopupButton.addEventListener('click', function () {
  popupBackground.classList.remove('popup_opened');
});

// popup.addEventListener('click', function(event) {
//   if(event.target === event.currentTarget) {
//     closePopup();
//   }
// });


const saveButton = document.querySelector('.popup__save-button');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');

saveButton.addEventListener('onsubmit', function (evt) {
  
  const name = document.querySelector('.profile__full-name');
  const job = document.querySelector('.profile__job');

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  popupBackground.classList.remove('popup_opened');
  evt.preventDefault();
}); 