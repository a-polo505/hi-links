import LogoElement from "./LogoElement.js";
import BadgeElement from "../decorative/BadgeElement.js";

export default class LogoContainer {
  constructor(logoSrc, logoAlt, badgeText) {
    this.logo = new LogoElement(logoSrc, logoAlt);
    this.badge = new BadgeElement(badgeText);
  }

  render() {
    const container = document.createElement("div");
    container.className = "logo-container";

    const logoElement = this.logo.render();
    container.appendChild(logoElement);

    const badgeElement = this.badge.render();
    container.appendChild(badgeElement);

    return container;
  }
}
