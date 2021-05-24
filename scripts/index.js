import Card from "./Card.js";
import {initialElements} from "./initial.js";

const elementsList = document.querySelector('.elements__list');

initialElements.forEach((element) => {
    const card = new Card(element, '#element');
    const cardElement = card.generateCard();
    elementsList.prepend(cardElement);
})