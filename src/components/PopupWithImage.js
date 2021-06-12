import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

  open(data) {
    const image = this._popup.querySelector('.view-fullscreen__image');
    image.src = data.link;
    image.alt = data.alt;
    this._popup.querySelector('.view-fullscreen__caption').textContent = data.caption;
    super.open();
  }
}