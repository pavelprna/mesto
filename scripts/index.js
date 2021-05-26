import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

const initialElements = [
    {
        name: 'Каир',
        link: './images/element-cairo.jpg',
    },
    {
        name: 'Острова Гили Траванган',
        link: './images/element-gili-trawangan.jpg',
    },
    {
        name: 'Голд-Кост',
        link: './images/element-gold-coast.jpg',
    },
    {
        name: 'Гуанахуанто',
        link: './images/element-guanajuato.jpg',
    },
    {
        name: 'Сан-Франциско',
        link: './images/element-san-francisco.jpg',
    },
    {
        name: 'Венеция',
        link: './images/element-venice.jpg',
    },
];

const popupList = Array.from(document.querySelectorAll('.popup'));

const elementsList = document.querySelector('.elements__list');

const viewFullImagePopup = document.querySelector('.popup_content_place-image');

const editProfileButton = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_content_edit-profile');
const nameInput = editProfilePopup.querySelector('.form__input[name = name-input]');
const jobInput = editProfilePopup.querySelector('.form__input[name = job-input]');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');

const addNewCardButton = document.querySelector('.profile__add-button');
const addNewCardPopup = document.querySelector('.popup_content_new-card');
const placeNameInput = addNewCardPopup.querySelector('.form__input[name = place-name-input]');
const placeLinkInput = addNewCardPopup.querySelector('.form__input[name = place-link-input]');

initialElements.forEach((element) => {
    const card = new Card(element, '#element');
    const cardElement = card.generateCard();
    elementsList.prepend(cardElement);
});

function openPopup(popup) {
    document.addEventListener('keydown', closePopupByEsc);
    popup.addEventListener('click', closePopupByOverlay);
    if (popup.querySelector('.form')) {
        new FormValidator({
            inputSelector: '.form__input',
            submitButtonSelector: '.form__submit-button',
            inactiveButtonClass: 'form__submit-button_disabled',
            inputErrorClass: 'form__input_type_error',
            errorClass: 'form__input-error_visible'
        }, popup.querySelector('.form')).enableValidation();
    }
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    document.removeEventListener('keydown', closePopupByEsc);
    popup.removeEventListener('click', closePopupByOverlay);
    popup.classList.remove('popup_opened');
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') closeOpenedPopup();
}

function closePopupByOverlay(evt) {
    if (evt.target === evt.currentTarget) closeOpenedPopup();
}

function closeOpenedPopup() {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
}

function handleEditProfileSubmitButton(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    closePopup(editProfilePopup);
}

function handleNewCardSubmitButton(evt) {
    evt.preventDefault();
    const card = new Card({
        name: placeNameInput.value,
        link: placeLinkInput.value,
    }, '#element');
    const cardElement = card.generateCard();
    elementsList.prepend(cardElement);
    closePopup(addNewCardPopup);
}

export function viewElementImage(evt) {
    const fullScreenImage = viewFullImagePopup.querySelector('.view-fullscreen__image');
    fullScreenImage.src = evt.target.src;
    fullScreenImage.alt = evt.target.alt;
    viewFullImagePopup.querySelector('.view-fullscreen__caption').textContent = evt.target.alt;
    openPopup(viewFullImagePopup);
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
    openPopup(editProfilePopup);
});

editProfilePopup.addEventListener('submit', handleEditProfileSubmitButton);

addNewCardButton.addEventListener('click', () => {
    placeNameInput.value = '';
    placeLinkInput.value = '';
    openPopup(addNewCardPopup);
});

addNewCardPopup.addEventListener('submit', handleNewCardSubmitButton);

setClosePopupEventListeners(popupList);
