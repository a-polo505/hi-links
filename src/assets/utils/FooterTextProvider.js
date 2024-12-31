export class FooterTextProvider {
  constructor(baseText) {
    this.baseText = baseText;
  }

  getText() {
    const currentYear = new Date().getFullYear();
    return `© 2024—${currentYear}, ${this.baseText}`;
  }
}
