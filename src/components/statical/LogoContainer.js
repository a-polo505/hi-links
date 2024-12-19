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

    const logoLink = document.createElement("a");
    logoLink.className = "logo-link";
    logoLink.setAttribute("href", "/");
    logoLink.setAttribute("aria-label", "Go to homepage");

    container.appendChild(logoLink);

    const logoElement = this.logo.render();
    logoLink.appendChild(logoElement);

    const badgeElement = this.badge.render();
    container.appendChild(badgeElement);

    return container;
  }
}
