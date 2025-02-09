import { inject } from "@vercel/analytics";
import Page from "./components/structural/Page.js";
import Card from "./components/structural/Card.js";
import Footer from "./components/structural/Footer.js";
import Header from "./components/structural/Header.js";
import ThemeUtils from "./services/ThemeService.js";
import StampSvgManager from "./components/decorative/StampElement.js";
import CardStampManager from "./components/decorative/CardStampManager.js";
import BackgroundManager from "./components/decorative/BackgroundManager.js";
import { FooterTextProvider } from "./assets/utils/FooterTextProvider.js";
import { resetInvalidTheme } from "./assets/utils/ThemeResetter.js";
import "./assets/styles/main.css";

inject();

export default class App {
  constructor() {
    this.page = new Page();
    this.backgroundManager = new BackgroundManager("/background-noise.png", {
      size: "128px",
      repeat: "repeat",
    });
  }

  initialize() {
    resetInvalidTheme();

    ThemeUtils.applyTheme(ThemeUtils.getCurrentTheme());

    this.page.initializeContainer();

    const header = new Header();
    this.page.addHeaderContent(header);

    const card = new Card();
    const cardElement = card.render();
    this.page.addMainContent(cardElement);

    const footerTextProvider = new FooterTextProvider(
      "created with 💜 by Alina Polozhai. All rights reserved."
    );
    const footer = new Footer(footerTextProvider);
    this.page.addFooterContent(footer);

    const stampSvg = new StampSvgManager("/stamp.svg");
    stampSvg.initialize();

    const cardStampManager = new CardStampManager("/stamp.svg", cardElement);
    cardStampManager.initialize();

    this.backgroundManager.initialize();
  }
}

const app = new App();
app.initialize();
