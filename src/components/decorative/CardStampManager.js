import BaseSvgManager from "../../assets/utils/BaseSvgManager.js";

export default class CardStampManager extends BaseSvgManager {
  constructor(filePath, cardElement) {
    super(filePath);
    this.cardElement = cardElement;
  }

  async initialize() {
    if (window.innerWidth <= 768) {
      try {
        const svgContent = await this.loadSVG();
        this.createSVG(this.cardElement, svgContent, "mobile-stamp");
      } catch (error) {
        console.error(error.message);
      }
    }

    window.addEventListener("resize", this.handleResize.bind(this));
  }

  async handleResize() {
    if (window.innerWidth <= 768) {
      if (!this.svgElement) {
        const svgContent = await this.loadSVG();
        this.createSVG(this.cardElement, svgContent, "mobile-stamp");
      }
    } else {
      this.removeSVG();
    }
  }
}
