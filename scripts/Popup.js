export default class Popup {
  #popup;

  constructor(elementSelector) {
    this.#popup = document.querySelector(elementSelector);
  }

  open() {
    document.addEventListener('keydown', this.#handleEscClose);
    this.#popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this.#handleEscClose);
    this.#popup.classList.remove('popup_opened');
  }

  #handleEscClose(evt) {
    if (evt.key === 'Escape') this.close();
  }

  #handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) this.close();
  }

  setEventListeners() {
    const closePopupButton = this.#popup.querySelector('.popup__close')
    closePopupButton.addEventListener('click', this.close);
    this.#popup.addEventListener('mousedown', this.#handleOverlayClose);
  }
}