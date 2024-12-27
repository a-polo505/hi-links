export default class TooltipManager {
  constructor() {
    this.tooltipElement = null;
  }

  /**
   * Creates a tooltip if it doesn't already exist
   */
  createTooltip() {
    if (!this.tooltipElement) {
      const tooltip = document.createElement("div");
      document.body.appendChild(tooltip);
      this.tooltipElement = tooltip;
    }
  }

  /**
   * Displays the tooltip
   * @param {HTMLElement} target - The element the tooltip is attached to
   * @param {string} content - The text content of the tooltip
   * @param {string} position - The position of the tooltip: top, bottom, left, right
   */
  showTooltip(target, content, position = "top") {
    this.createTooltip();
    this.tooltipElement.innerHTML = content;
    this.tooltipElement.className = `tooltip ${position}`;

    const targetRect = target.getBoundingClientRect();
    let top = 0;
    let left = 0;

    switch (position) {
      case "top":
        top =
          targetRect.top +
          window.scrollY -
          this.tooltipElement.offsetHeight -
          8;
        left =
          targetRect.left +
          window.scrollX +
          (targetRect.width - this.tooltipElement.offsetWidth) / 2;
        break;
      case "bottom":
        top = targetRect.bottom + window.scrollY + 8;
        left =
          targetRect.left +
          window.scrollX +
          (targetRect.width - this.tooltipElement.offsetWidth) / 2;
        break;
      case "left":
        top =
          targetRect.top +
          window.scrollY +
          (targetRect.height - this.tooltipElement.offsetHeight) / 2;
        left =
          targetRect.left +
          window.scrollX -
          this.tooltipElement.offsetWidth -
          8;
        break;
      case "right":
        top =
          targetRect.top +
          window.scrollY +
          (targetRect.height - this.tooltipElement.offsetHeight) / 2;
        left = targetRect.right + window.scrollX + 8;
        break;
      default:
        break;
    }

    this.tooltipElement.style.top = `${top}px`;
    this.tooltipElement.style.left = `${left}px`;
    this.tooltipElement.style.opacity = 1;
  }

  /**
   * Hides the tooltip
   */
  hideTooltip() {
    if (this.tooltipElement) {
      this.tooltipElement.style.opacity = 0;
      setTimeout(() => {
        if (this.tooltipElement) {
          this.tooltipElement.remove();
          this.tooltipElement = null;
        }
      }, 300);
    }
  }

  /**
   * Attaches a tooltip to an element
   * @param {HTMLElement} element - The element the tooltip is attached to
   * @param {string} content - The text content of the tooltip
   * @param {string} position - The position of the tooltip: top, bottom, left, right
   */
  attachTooltip(element, content, position = "top") {
    const isTouchDevice = "ontouchstart" in window;

    if (isTouchDevice) {
      element.addEventListener("click", (event) => {
        event.stopPropagation();
        if (this.tooltipElement) {
          this.hideTooltip();
        } else {
          this.showTooltip(element, content, position);
        }
      });

      document.addEventListener("click", (event) => {
        if (this.tooltipElement && !element.contains(event.target)) {
          this.hideTooltip();
        }
      });
    } else {
      element.addEventListener("mouseenter", () =>
        this.showTooltip(element, content, position)
      );
      element.addEventListener("mouseleave", () => this.hideTooltip());
    }
  }
}
