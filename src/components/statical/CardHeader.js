import LogoContainer from "./LogoContainer.js";
import TextElement from "./TextElement.js";
import SubTextElement from "./SubTextElement.js";
import ThemedContainer from "./ThemedContainer.js";

export default class CardHeader {
  constructor(
    logoSrc,
    logoAlt,
    badgeText,
    cardHeaderText,
    cardHeaderSubText,
    name = null
  ) {
    this.logoContainer = new LogoContainer(logoSrc, logoAlt, badgeText);
    this.cardHeaderText = new TextElement(cardHeaderText);
    this.cardHeaderSubText = new SubTextElement(cardHeaderSubText);
    this.name = name;
  }

  render() {
    const cardHeader = document.createElement("div");
    cardHeader.className =
      "card-header flex align-content-start justify-content-between";

    if (this.name) {
      cardHeader.setAttribute("name", this.name);
    }

    const titleContainer = document.createElement("div");
    titleContainer.className = "title-container flex flex-col";
    cardHeader.appendChild(titleContainer);

    const themedContainer = new ThemedContainer();
    cardHeader.appendChild(themedContainer.render());

    const logoElement = this.logoContainer.render();
    titleContainer.appendChild(logoElement);

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title flex flex-col flex-nowrap";
    titleContainer.appendChild(cardTitle);

    const textElement = this.cardHeaderText.render();
    cardTitle.appendChild(textElement);

    const subTextElement = this.cardHeaderSubText.render();
    cardTitle.appendChild(subTextElement);

    return cardHeader;
  }
}
