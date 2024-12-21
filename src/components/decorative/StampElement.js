import BaseSvgManager from "../../assets/utils/BaseSvgManager.js";

export default class StampSvgManager extends BaseSvgManager {
  constructor(filePath) {
    super(filePath);
  }

  async initialize() {
    if (window.innerWidth > 768) {
      try {
        const svgContent = await this.loadSVG();
        this.createSVG(document.body, svgContent, "stamp-svg");
      } catch (error) {
        console.error(error.message);
      }
    }

    window.addEventListener("resize", this.handleResize.bind(this));
  }

  async handleResize() {
    if (window.innerWidth > 768) {
      if (!this.svgElement) {
        const svgContent = await this.loadSVG();
        this.createSVG(document.body, svgContent, "stamp-svg");
      }
    } else {
      this.removeSVG();
    }
  }
}
