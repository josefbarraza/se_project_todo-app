class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);

    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      const clickedOverlay = evt.target === this._popupElement;
      const clickedCloseButton = evt.target.closest(".popup__close");

      if (clickedOverlay || clickedCloseButton) {
        this.close();
      }
    });
  }
}

export default Popup;
