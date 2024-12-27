export default class BackgroundManager {
  constructor(imageUrl, options = {}) {
    this.imageUrl = imageUrl;
    this.size = options.size || "cover";
    this.repeat = options.repeat || "no-repeat";
    this.targetElement = options.targetElement || document.body;
    this.backgroundElement = null;
  }

  initialize() {
    if (this.backgroundElement) return;

    this.backgroundElement = document.createElement("div");
    this.backgroundElement.className = "background-manager";
    this.backgroundElement.style.backgroundImage = `url('${this.imageUrl}')`;
    this.backgroundElement.style.backgroundSize = this.size;
    this.backgroundElement.style.backgroundRepeat = this.repeat;

    this.targetElement.style.position = "relative";
    this.targetElement.appendChild(this.backgroundElement);
  }

  updateBackground(imageUrl, options = {}) {
    if (imageUrl) this.imageUrl = imageUrl;
    if (options.opacity !== undefined) this.opacity = options.opacity;
    if (options.size !== undefined) this.size = options.size;
    if (options.repeat !== undefined) this.repeat = options.repeat;

    if (this.backgroundElement) {
      this.backgroundElement.style.backgroundImage = `url('${this.imageUrl}')`;
      this.backgroundElement.style.backgroundSize = this.size;
      this.backgroundElement.style.backgroundRepeat = this.repeat;
    }
  }

  destroy() {
    if (this.backgroundElement) {
      this.backgroundElement.remove();
      this.backgroundElement = null;
    }
  }
}
