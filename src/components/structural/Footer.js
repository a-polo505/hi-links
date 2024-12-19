export default class Footer {
  constructor(footerTextProvider) {
    this.footerTextProvider = footerTextProvider;
  }

  render() {
    const footerContent = document.createElement("nav");
    footerContent.className = "footer-content";
    footerContent.textContent = this.footerTextProvider.getText();

    return footerContent;
  }
}
