import Popup from "./Popup.js";
import {popupWithImageConfig} from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  open(data) {
    const { imageSelector, captionSelector } = popupWithImageConfig;
    const image = this._popup.querySelector(imageSelector);
    image.src = data.link;
    image.alt = data.alt;
    this._popup.querySelector(captionSelector).textContent = data.caption;
    super.open();
  }
}