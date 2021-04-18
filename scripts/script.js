let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close');
let nameInput = popup.querySelector('.popup__input[name = name-input]');
let jobInput = popup.querySelector('.popup__input[name = job-input]');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

function togglePopup(evt) {
    if (evt && evt.target === evt.currentTarget) {
        nameInput.value = name.textContent;
        jobInput.value = job.textContent;
    }
    popup.classList.toggle('popup_opened');
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    togglePopup();
}

editProfileButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);
popup.addEventListener('submit', formSubmitHandler);