import Popup from "./Popup";

export default class PopupWithFormSubmit extends Popup {
  constructor(elementSelector) {
    super(elementSelector);
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleSubmitCallback();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', this._handleSubmit)
  }
}