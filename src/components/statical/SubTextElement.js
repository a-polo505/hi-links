export default class SubTextElement {
  constructor(text) {
    this.text = text;
  }

  render() {
    const subTextElement = document.createElement("p");
    subTextElement.className = "logo-sub-text";
    subTextElement.textContent = this.text;
    return subTextElement;
  }
}
