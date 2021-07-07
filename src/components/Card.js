import { cardConfig } from "../utils/constants.js";

export default class Card {

  constructor(data, cardSelector, callbacks) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._onClick = callbacks.viewImage;
    this._onDelete = callbacks.confirmDelete;
    this._likes = data.likes;
    this._isOwner = false;
  }

  _handleOnClick = () => {
    const data = {
      caption: this._name,
      alt: this._name,
      link: this._image,
    }
    this._onClick(data);
  }

  _handleLikeCard = () => {
    const { activeLikeClass } = cardConfig;
    this._likeButton.classList.toggle(activeLikeClass);
  }

  _handleRemoveCard = () => {
    this._onDelete()
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners = () => {
    const { removeButtonSelector, likeSelector} = cardConfig;
    const removeButton = this._element.querySelector(removeButtonSelector);

    if (this._isOwner) {
      removeButton.addEventListener('click', this._handleRemoveCard);
    } else {
      removeButton.remove();
    }

    this._likeButton = this._element.querySelector(likeSelector);

    this._likeButton.addEventListener('click', this._handleLikeCard);
    this._elementImage.addEventListener('click', this._handleOnClick);
  }

  _getTemplate = () => {
    const { listItemSelector } = cardConfig;
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector(listItemSelector)
      .cloneNode(true);
  }

  set isOwner(bool) {
    this._isOwner = bool;
  }

  generateCard = () => {
    const { imageSelector, titleSelector, likeCounterSelector } = cardConfig;

    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector(imageSelector);

    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._element.querySelector(titleSelector).textContent = this._name;

    this._likeCounter = this._element.querySelector(likeCounterSelector);
    this._likeCounter.textContent = this._likes.length;

    this._setEventListeners();

    return this._element;
  }
}