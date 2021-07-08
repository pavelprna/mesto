import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupWithImageConfig) {
    super(popupWithImageConfig.imagePopupSelector);
    this._image = this._popup.querySelector(popupWithImageConfig.imageSelector);
    this._caption = this._popup.querySelector(popupWithImageConfig.captionSelector)
  }

  open(data) {
    this._image.src = data.link;
    this._image.alt = data.alt;
    this._caption.textContent = data.caption;
    super.open();
  }
}