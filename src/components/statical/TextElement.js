export default class LogoTextElement {
  constructor(text) {
    this.text = text;
  }

  render() {
    const textElement = document.createElement("p");
    textElement.className = "logo-text";
    textElement.textContent = this.text;
    return textElement;
  }
}
