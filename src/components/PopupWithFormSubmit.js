import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor(elementSelector) {
    super(elementSelector);
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  close() {
    super.close();
    this._popup.removeEventListener('submit', this._handleSubmit)
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._handleSubmit)
  }
}