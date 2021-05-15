const popupList = Array.from(document.querySelectorAll('.popup'))

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function submitPopupByEnter(popupElement) {

}

function setPopupEventListeners(popupList) {
    popupList.forEach((popupElement) => {
        const inputList = popupElement.querySelectorAll('.form__input');
        const closeButton = popupElement.querySelector('.popup__close');
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('keydown', (evt) => {
                if (evt.key === 'Enter' && !hasInvalidInput(inputList)) {
                    submitPopupByEnter(popupElement);
                }
            });
        });
        closeButton.addEventListener('click', () => {
            closePopup(popupElement);
        });
    });
}