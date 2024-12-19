export default class Header {
  constructor(headerText) {
    this.headerText = headerText;
  }

  render() {
    const headerContent = document.createElement("div");
    headerContent.className = "header-content";
    headerContent.textContent = this.headerText;

    return headerContent;
  }
}
