let popup = document.querySelector('.popup');
let editProfileButton = document.querySelector('.profile__edit-button');
let closePopupButton = popup.querySelector('.popup__close');
let nameInput = popup.querySelector('.form__input[name = name-input]');
let jobInput = popup.querySelector('.form__input[name = job-input]');
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');

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
    const elementItem = elementTemplate.querySelector('.elements__list-item').cloneNode(true);
    elementItem.querySelector('.element__image').src = element.link;
    elementItem.querySelector('.element__image').alt = element.name;
    elementItem.querySelector('.element__title').textContent = element.name;
    elementsList.append(elementItem);
});


function togglePopup() {
    if (!popup.classList.contains('popup_opened')) {
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