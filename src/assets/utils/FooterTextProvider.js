export class FooterTextProvider {
  constructor(baseText) {
    this.baseText = baseText;
  }

  getText() {
    const currentYear = new Date().getFullYear();
    return `© ${currentYear}, ${this.baseText}`;
  }
}
