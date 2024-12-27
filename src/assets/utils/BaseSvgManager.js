export default class BaseSvgManager {
  constructor(filePath) {
    this.filePath = filePath;
    this.svgElement = null;
    this.containerElement = null;
  }

  async loadSVG() {
    const response = await fetch(this.filePath);
    if (!response.ok) {
      throw new Error(`Failed to load SVG: ${response.statusText}`);
    }
    return response.text();
  }

  createSVG(container, svgContent, wrapperClassName, svgClassName) {
    if (this.containerElement) return;

    const svgWrapper = document.createElement("div");
    svgWrapper.className = wrapperClassName;

    svgWrapper.innerHTML = svgContent;

    const svgElement = svgWrapper.querySelector("svg");
    if (svgElement) {
      svgElement.classList.add(svgClassName);
      this.svgElement = svgElement;
    }

    container.appendChild(svgWrapper);
    this.containerElement = svgWrapper;
  }

  removeSVG() {
    if (this.containerElement) {
      this.containerElement.remove();
      this.containerElement = null;
      this.svgElement = null;
    }
  }
}
