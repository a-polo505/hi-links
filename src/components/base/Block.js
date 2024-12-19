export default class Block {
  constructor() {
    this.buttons = [];
    this.blockElement = null;
  }

  /**
   * Adds a button to the block
   * @param {Button} button - The button object to be added
   */
  addButton(button) {
    this.buttons.push(button);
  }

  /**
   * Renders the block
   * @returns {HTMLElement} - The HTML element of the block
   */
  render() {
    this.blockElement = document.createElement("div");
    this.blockElement.className = "block flex flex-wrap";

    this.buttons.forEach((button) => {
      this.blockElement.appendChild(button.render());
    });

    return this.blockElement;
  }
}
