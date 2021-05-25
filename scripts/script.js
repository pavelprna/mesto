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

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_visible'
});
