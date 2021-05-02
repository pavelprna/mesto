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

initialElements.forEach((element) => {
    elementsList.prepend(createElement(element));
});

function createElement(element) {
    const elementItem = elementTemplate.querySelector('.elements__list-item').cloneNode(true);
    elementItem.querySelector('.element__image').src = element.link;
    elementItem.querySelector('.element__image').alt = element.name;
    elementItem.querySelector('.element__title').textContent = element.name;

    elementItem.querySelector('.element__like').addEventListener('click', toggleLike);
    elementItem.querySelector('.element__remove-button').addEventListener('click', removeCard);
    elementItem.querySelector('.element__image').addEventListener('click', viewElementImage);

    return elementItem;
}

function togglePopup(popupSelector) {
    const currentPopup = document.querySelector(`${popupSelector}`);
    currentPopup.classList.toggle('popup_opened');
}

function toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
}

function removeCard(evt) {
    evt.target.closest('.elements__list-item').remove();
}

function viewElementImage(evt) {
    viewFullImagePopup.querySelector('.view-fullscreen__image').src = evt.target.src;
    viewFullImagePopup.querySelector('.view-fullscreen__image').alt = evt.target.alt;
    viewFullImagePopup.querySelector('.view-fullscreen__caption').textContent = evt.target.alt;

    togglePopup('.popup_content_place-image');
}

function editProfileFormSubmitHandler(evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
    togglePopup('.popup_content_edit-profile');
}

function addNewCardSubmitHandler(evt) {
    evt.preventDefault();
    const newPlace = {};
    newPlace.name = placeNameInput.value;
    newPlace.link = placeLinkInput.value;
    elementsList.prepend(createElement(newPlace));
    togglePopup('.popup_content_new-card')
}

editProfileButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    togglePopup('.popup_content_edit-profile');
});
editProfilePopup.addEventListener('submit', editProfileFormSubmitHandler);

addNewCardButton.addEventListener('click', () => {
    placeNameInput.value = '';
    placeLinkInput.value = '';
    togglePopup('.popup_content_new-card');
});
addNewCardPopup.addEventListener('submit', addNewCardSubmitHandler);

closeEditProfilePopupButton.addEventListener('click', () => {
    togglePopup('.popup_content_edit-profile');
});
closeAddNewCardButton.addEventListener('click', () => {
    togglePopup('.popup_content_new-card');
});
closeViewFullImagePopup.addEventListener('click', () => {
    togglePopup('.popup_content_place-image');
});