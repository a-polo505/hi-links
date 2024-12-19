import CardHeader from "../statical/CardHeader.js";
import DecorativeElement from "../decorative/DecorativeElement.js";
import MainSection from "../sections/MainSection.js";
import ProjectsSection from "../sections/ProjectsSection.js";
import SocialMediaSection from "../sections/SocialMediaSection.js";
import CodeSection from "../sections/CodeSection.js";
import MiscSection from "../sections/MiscSection.js";

export default class Card {
  constructor(name = null) {
    this.name = name;
    this.header = new CardHeader(
      "https://raw.githubusercontent.com/a-polo505/static/e4f34132cac6aa096a407d4b7237b1fd3cd17c91/assets/hi-links/images/a-polo505.svg",
      "a-polo505 Brand Logotype",
      "Online",
      "Alina",
      "Business Systems Analyst"
    );

    this.decorativeElement = new DecorativeElement("animated-line");

    this.mainSection = MainSection.create();
    this.projectsSection = ProjectsSection.create();
    this.socialMediaSection = SocialMediaSection.create();
    this.codeSection = CodeSection.create();
    this.miscSection = MiscSection.create();
  }

  render() {
    const cardElement = document.createElement("div");
    cardElement.className =
      "card animate-in flex flex-col flex-nowrap align-content-center justify-content-start";

    if (this.name) {
      cardElement.setAttribute("name", this.name);
    }

    const animatedLineContainer = document.createElement("div");
    animatedLineContainer.className = "animated-line-container";

    cardElement.appendChild(this.header.render());
    cardElement.appendChild(animatedLineContainer);
    animatedLineContainer.appendChild(this.decorativeElement.render());
    cardElement.appendChild(this.mainSection.render());
    cardElement.appendChild(this.projectsSection.render());
    cardElement.appendChild(this.socialMediaSection.render());
    cardElement.appendChild(this.codeSection.render());
    cardElement.appendChild(this.miscSection.render());

    return cardElement;
  }
}
