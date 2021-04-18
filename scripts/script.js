let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let editProfileButton = document.querySelector('.profile__edit-button');
let nameInput = popup.querySelector('.popup__input[name = nameInput]')
let jobInput = popup.querySelector('.popup__input[name = jobInput]')


function togglePopup() {
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__subtitle').textContent = jobInput.value;

    togglePopup();
}

editProfileButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
popup.addEventListener('submit', formSubmitHandler);