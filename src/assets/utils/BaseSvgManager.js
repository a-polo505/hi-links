export default class BaseSvgManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.svgElement = null;
  }

  async loadSVG() {
    const response = await fetch(this.filePath);
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    return response.text();
  }

  createSVG(container, svgContent, className) {
    if (this.svgElement) return;

    const svgWrapper = document.createElement("div");
    svgWrapper.className = className;
    svgWrapper.innerHTML = svgContent;

    container.appendChild(svgWrapper);
    this.svgElement = svgWrapper;
  }

  removeSVG() {
    if (this.svgElement) {
      this.svgElement.remove();
      this.svgElement = null;
    }
  }
}
