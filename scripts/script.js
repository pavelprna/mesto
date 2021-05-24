const popupList = Array.from(document.querySelectorAll('.popup'))

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_content_edit-profile');
const editProfileInputList = Array.from(editProfilePopup.querySelectorAll('.form__input'));
const editProfileSubmitButton = editProfilePopup.querySelector('.form__submit-button');
const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_content_new-card');
const addNewCardInputList = Array.from(addNewCardPopup.querySelectorAll('.form__input'));
const addNewCardSubmitButton = addNewCardPopup.querySelector('.form__submit-button');
const placeNameInput = addNewCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = addNewCardPopup.querySelector('.form__input[name = place-link-input]');

const viewFullImagePopup = document.querySelector('.popup_content_place-image');

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
    closePopup(openedPopup);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') closeOpenedPopup();
}

function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) closeOpenedPopup();
}

function openPopup(popup) {
    document.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('click', closePopupByOverlay);
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener('keydown', closePopupByEsc);
    popup.removeEventListener('click', closePopupByOverlay);
    popup.classList.remove('popup_opened');
}

function viewElementImage(evt) {
    const fullScreenImage = viewFullImagePopup.querySelector('.view-fullscreen__image');
    fullScreenImage.src = evt.target.src;
    fullScreenImage.alt = evt.target.alt;
    viewFullImagePopup.querySelector('.view-fullscreen__caption').textContent = evt.target.alt;
    openPopup(viewFullImagePopup);
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(editProfilePopup);
}

function addNewCardSubmitHandler(evt) {
    evt.preventDefault();
    const newPlace = {};
    newPlace.name = placeNameInput.value;
    newPlace.link = placeLinkInput.value;
    elementsList.prepend(createElement(newPlace));
    closePopup(addNewCardPopup);
}

function setClosePopupEventListeners(popupList) {
    popupList.forEach((popup) => {
        const closePopupButton = popup.querySelector('.popup__close')
        closePopupButton.addEventListener('click', () => {
            closePopup(popup);
        });
    });
}

editProfileButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    toggleButtonState(editProfileInputList, editProfileSubmitButton, {inactiveButtonClass: 'form__submit-button_disabled'});
    openPopup(editProfilePopup);
});
editProfilePopup.addEventListener('submit', editProfileFormSubmitHandler);

addNewCardButton.addEventListener('click', () => {
    placeNameInput.value = '';
    placeLinkInput.value = '';
    toggleButtonState(addNewCardInputList, addNewCardSubmitButton, {inactiveButtonClass: 'form__submit-button_disabled'});
    openPopup(addNewCardPopup);
});

addNewCardPopup.addEventListener('submit', addNewCardSubmitHandler);

setClosePopupEventListeners(popupList);

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
});
