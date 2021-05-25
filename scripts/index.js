import Card from "./Card.js";
import {initialElements} from "./initial.js";

const popupList = Array.from(document.querySelectorAll('.popup'));

const viewFullImagePopup = document.querySelector('.popup_content_place-image');

const elementsList = document.querySelector('.elements__list');

initialElements.forEach((element) => {
    const card = new Card(element, '#element');
    const cardElement = card.generateCard();
    elementsList.prepend(cardElement);
});

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

setClosePopupEventListeners(popupList);