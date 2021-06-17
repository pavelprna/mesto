import {popupConfig} from "../utils/constants.js";

export default class Popup {

  constructor(elementSelector) {
    const { openedClass, closeButtonSelector } = popupConfig;
    this._popup = document.querySelector(elementSelector);
    this._openedClass = openedClass;
    this._closeButton = this._popup.querySelector(closeButtonSelector);
    this._onEsc = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keydown', this._onEsc);
    this._popup.classList.add(this._openedClass);
  }

  close() {
    document.removeEventListener('keydown', this._onEsc);
    this._popup.classList.remove(this._openedClass);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') this.close();
  }

  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) this.close();
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
  }
}
