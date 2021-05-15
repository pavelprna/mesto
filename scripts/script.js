const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_content_edit-profile');
const closeEditProfilePopupButton = editProfilePopup.querySelector('.popup__close');
const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_content_new-card');
const closeAddNewCardButton = addNewCardPopup.querySelector('.popup__close');
const placeNameInput = addNewCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = addNewCardPopup.querySelector('.form__input[name = place-link-input]');

const viewFullImagePopup = document.querySelector('.popup_content_place-image');
const closeViewFullImagePopup = viewFullImagePopup.querySelector('.popup__close');

const elementTemplate = document.querySelector('#element').content;
const elementsList = document.querySelector('.elements__list');

initialElements.forEach((element) => {
    elementsList.prepend(createElement(element));
});

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
});

function createElement(element) {
    const elementItem = elementTemplate.querySelector('.elements__list-item').cloneNode(true);

    const elementImage = elementItem.querySelector('.element__image');
    const elementTitle = elementItem.querySelector('.element__title');
    elementImage.src = element.link;
    elementImage.alt = element.name;
    elementTitle.textContent = element.name;

    elementItem.querySelector('.element__like').addEventListener('click', toggleLike);
    elementItem.querySelector('.element__remove-button').addEventListener('click', removeCard);
    elementImage.addEventListener('click', viewElementImage);

    return elementItem;
}

function closeOpenedPopup() {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') closeOpenedPopup();
}

function clickHandler(evt) {
    if (evt.target === evt.currentTarget) closeOpenedPopup();
}

function togglePopup(popup) {
    if (!popup.classList.contains('popup_opened')) {
        document.addEventListener('keydown', closePopupByEsc);
        popup.addEventListener('click', clickHandler);
    } else {
        document.removeEventListener('keydown', closePopupByEsc);
        popup.removeEventListener('click', clickHandler);
    }
    popup.classList.toggle('popup_opened');
}

function toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
}

function removeCard(evt) {
    evt.target.closest('.elements__list-item').remove();
}

function viewElementImage(evt) {
    const fullScreenImage = viewFullImagePopup.querySelector('.view-fullscreen__image');
    fullScreenImage.src = evt.target.src;
    fullScreenImage.alt = evt.target.alt;
    viewFullImagePopup.querySelector('.view-fullscreen__caption').textContent = evt.target.alt;

    togglePopup(viewFullImagePopup);
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup(editProfilePopup);
}

function addNewCardSubmitHandler(evt) {
    evt.preventDefault();
    const newPlace = {};
    newPlace.name = placeNameInput.value;
    newPlace.link = placeLinkInput.value;
    elementsList.prepend(createElement(newPlace));
    togglePopup(addNewCardPopup)
}

editProfileButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    togglePopup(editProfilePopup);
});
editProfilePopup.addEventListener('submit', editProfileFormSubmitHandler);

addNewCardButton.addEventListener('click', () => {
    placeNameInput.value = '';
    placeLinkInput.value = '';
    togglePopup(addNewCardPopup);
});
addNewCardPopup.addEventListener('submit', addNewCardSubmitHandler);

closeEditProfilePopupButton.addEventListener('click', () => {
    togglePopup(editProfilePopup);
});
closeAddNewCardButton.addEventListener('click', () => {
    togglePopup(addNewCardPopup);
});
closeViewFullImagePopup.addEventListener('click', () => {
    togglePopup(viewFullImagePopup);
});
