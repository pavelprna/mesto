import { cardConfig } from "../utils/constants.js";

export default class Card {

  constructor(data, cardSelector, callbacks) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._onClick = callbacks.viewImage;
    this._onDelete = callbacks.confirmDelete;
    this._onLike = callbacks.likeHandler
    this._likes = data.likes;
    this._isLiked = false;
    this._isOwner = false;
    this._currentUser = null;
    this._ownerId = data.owner._id;
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
    this._onLike()
    const { activeLikeClass } = cardConfig;
    this._likeButton.classList.toggle(activeLikeClass);
    this._isLiked = !this._isLiked
  }

  _handleRemoveCard = () => {
    this._onDelete()
  }

  _checkIsLiked() {
    for (let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id === this._currentUser) {
        this._isLiked = true;
        break;
      }
    }
  }

  remove() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners = () => {
    const { removeButtonSelector } = cardConfig;
    const removeButton = this._element.querySelector(removeButtonSelector);

    if (this._isOwner) {
      removeButton.addEventListener('click', this._handleRemoveCard);
    } else {
      removeButton.remove();
    }

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

  setCurrentUser(id) {
    this._currentUser = id;
    if (id === this._ownerId) this._isOwner = true;
  }
  
  get liked() {
    return this._isLiked;
  }

  setLikes(likes) {
    this._likeCounter.textContent = likes.length;
  }

  generateCard = () => {
    const { imageSelector, titleSelector, likeSelector, likeCounterSelector, activeLikeClass } = cardConfig;

    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(likeSelector);
    this._elementImage = this._element.querySelector(imageSelector);

    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._element.querySelector(titleSelector).textContent = this._name;

    this._likeCounter = this._element.querySelector(likeCounterSelector);
    this.setLikes(this._likes)
    this._checkIsLiked();

    if (this._isLiked) {
      this._likeButton.classList.add(activeLikeClass)
    }

    this._setEventListeners();

    return this._element;
  }
}