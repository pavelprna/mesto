import {viewElementImage} from "./index.js";

export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._image = data.link;
        this._cardSelector = cardSelector;
        this._isLiked = false;
    }

    _handleLikeCard() {
        this._isLiked = !this._isLiked;
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _handleRemoveCard() {
        this._element.remove();
    }

    _setEventListeners() {
        this._element.querySelector('.element__remove-button').addEventListener('click', () => {
            this._handleRemoveCard();
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._handleLikeCard();
        });
        this._element.querySelector('.element__image').addEventListener('click', (evt) => {
            viewElementImage(evt);
        });
    }

    _getTemplate() {
        return document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__list-item')
            .cloneNode(true);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.element__image').src = this._image;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }
}