import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  constructor(data, elementSelector) {
    super(elementSelector);
    this._image = data.link;
    this._alt = data.alt;
    this._caption = data.caption;
  }

  open() {
    const image = this._popup.querySelector('.view-fullscreen__image');
    image.src = this._image;
    image.alt = this._alt;
    this._popup.querySelector('.view-fullscreen__caption').textContent = this._caption;
    super.open();
  }
}