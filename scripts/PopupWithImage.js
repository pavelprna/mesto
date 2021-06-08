import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  #image;
  #alt;
  #caption;

  constructor(data, elementSelector) {
    super(elementSelector);
    this.#image = data.link;
    this.#alt = data.alt;
    this.#caption = data.caption;
  }

  open() {
    console.log(this._popup)
    const image = this._popup.querySelector('.view-fullscreen__image');
    image.src = this.#image;
    image.alt = this.#alt;
    this._popup.querySelector('.view-fullscreen__caption').textContent = this.#caption;
    super.open();
  }
}