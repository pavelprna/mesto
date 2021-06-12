export default class Card {

  constructor(data, cardSelector, onClick) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._onClick = onClick;
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
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _handleRemoveCard = () => {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners = () => {
    this._element.querySelector('.element__remove-button').addEventListener('click', this._handleRemoveCard);
    this._element.querySelector('.element__like').addEventListener('click', this._handleLikeCard);
    this._elementImage.addEventListener('click', this._handleOnClick);
  }

  _getTemplate = () => {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__list-item')
      .cloneNode(true);
  }

  generateCard = () => {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');

    this._elementImage.src = this._image;
    this._elementImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}