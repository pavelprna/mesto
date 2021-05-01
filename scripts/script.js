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

const likeButtons = document.querySelectorAll('.element__like');

likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', toggleLike);
});

function toggleLike(evt) {
    evt.target.classList.toggle('element__like_active');
    console.log('Like!');
}

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
    renderElement(element);
});

function renderElement(element) {
    const elementItem = elementTemplate.querySelector('.elements__list-item').cloneNode(true);
    elementItem.querySelector('.element__image').src = element.link;
    elementItem.querySelector('.element__image').alt = element.name;
    elementItem.querySelector('.element__title').textContent = element.name;
    elementsList.prepend(elementItem);
    elementItem.querySelector('.element__like').addEventListener('click', toggleLike);
}

function togglePopup(popupSelector) {
    const currentPopup = document.querySelector(`${popupSelector}`);
    currentPopup.classList.toggle('popup_opened');
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
    renderElement(newPlace);
    togglePopup('.popup_content_new-card')
}

editProfileButton.addEventListener('click', () => {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
    togglePopup('.popup_content_edit-profile');
});
closeEditProfilePopupButton.addEventListener('click', () => {
    togglePopup('.popup_content_edit-profile');
});
editProfilePopup.addEventListener('submit', editProfileFormSubmitHandler);

addNewCardButton.addEventListener('click', () => {
    togglePopup('.popup_content_new-card');
});
closeAddNewCardButton.addEventListener('click', () => {
    togglePopup('.popup_content_new-card');
})
addNewCardPopup.addEventListener('submit', addNewCardSubmitHandler);