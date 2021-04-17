let popup = document.querySelector('.popup');
let closePopupButton = popup.querySelector('.popup__close');
let editProfileButton = document.querySelector('.profile__edit-button');


function togglePopup(evt) {
    evt.preventDefault();
    popup.classList.toggle('popup_opened');
}

editProfileButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
