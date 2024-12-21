import { inject } from "@vercel/analytics";
import Page from "./components/structural/Page.js";
import Card from "./components/structural/Card.js";
import Footer from "./components/structural/Footer.js";
import Header from "./components/structural/Header.js";
import ThemeUtils from "./services/ThemeService.js";
import StampSvgManager from "./components/decorative/StampElement.js";
import CardStampManager from "./components/decorative/CardStampManager.js";
import { FooterTextProvider } from "./assets/utils/FooterTextProvider.js";
import "./assets/styles/main.css";

inject();

export default class App {
  constructor() {
    this.page = new Page();
  }

  initialize() {
    this.page.initializeContainer();

    ThemeUtils.applyTheme(ThemeUtils.getCurrentTheme());

    const header = new Header();
    this.page.addHeaderContent(header);

    const card = new Card();
    const cardElement = card.render();
    this.page.addMainContent(cardElement);

    const footerTextProvider = new FooterTextProvider(
      "a-polo505. All rights reserved."
    );
    const footer = new Footer(footerTextProvider);
    this.page.addFooterContent(footer);

    const stampSvg = new StampSvgManager("/stamp.svg");
    stampSvg.initialize();

    const cardStampManager = new CardStampManager("/stamp.svg", cardElement);
    cardStampManager.initialize();
  }
}

const app = new App();
app.initialize();
