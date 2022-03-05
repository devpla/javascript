export class Keyboard {
  #switchEl; // private class field
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.getElementById('switch');
  }

  #addEvent() {
    this.#switchEl.addEventListener('change', (event) => {
      document.documentElement.setAttribute(
        'theme',
        event.target.checked ? 'dark-mode' : ''
      );
    });
  }
}
