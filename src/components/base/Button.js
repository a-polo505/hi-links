export default class Button {
  /**
   * Constructor for the base button
   * @param {Object} config - Button configuration
   * @param {string} config.label - Button text (optional)
   * @param {string} config.icon - SVG icon code (optional)
   * @param {string} config.className - Additional styling class for the button
   * @param {Function} config.onClick - Callback function for button click
   */
  constructor({
    label = "",
    icon = "",
    className = "",
    onClick = null,
    ariaLabel = null,
  }) {
    this.label = label;
    this.icon = icon;
    this.className = className;
    this.onClick = onClick;
    this.ariaLabel = ariaLabel;

    this.buttonElement = null;
  }

  /**
   * Creates the HTML element for the button
   * @returns {HTMLButtonElement} - The button element
   */
  render() {
    this.buttonElement = document.createElement("button");
    this.buttonElement.className = `button flex align-content-center align-items-center ${this.className}`;

    // Add SVG icon if provided
    if (this.icon) {
      const iconElement = this.createIconElement();
      this.buttonElement.appendChild(iconElement);
    }

    // Add button label if provided
    if (this.label) {
      const labelElement = this.createLabelElement();
      this.buttonElement.appendChild(labelElement);
    }

    // Add click event listener if provided
    if (typeof this.onClick === "function") {
      this.buttonElement.addEventListener("click", this.onClick);
    }

    // Add aria label if provided
    if (this.ariaLabel) {
      this.buttonElement.setAttribute("aria-label", this.ariaLabel);
    }

    return this.buttonElement;
  }

  /**
   * Creates the SVG icon element
   * @returns {HTMLElement} - The SVG icon element
   */
  createIconElement() {
    const wrapper = document.createElement("span");
    wrapper.className = "button-icon";
    wrapper.innerHTML = this.icon;
    return wrapper;
  }

  /**
   * Creates the text element for the button
   * @returns {HTMLElement} - The text element
   */
  createLabelElement() {
    const span = document.createElement("span");
    span.className = "button-label";
    span.textContent = this.label;
    return span;
  }

  /**
   * Updates the button's styling classes
   * @param {string} newClassName - The new styling class
   */
  updateClassName(newClassName) {
    this.buttonElement.className = `button ${newClassName}`;
  }
}
