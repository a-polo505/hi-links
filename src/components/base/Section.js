import TooltipManager from "./TooltipManager.js";

export default class Section {
  constructor(title, name = null, tooltip = null) {
    this.name = name;
    this.title = title;
    this.titleLevel = "h2";
    this.description = "";
    this.blocks = [];
    this.sectionElement = null;
    this.tooltip = tooltip;
    this.tooltipManager = new TooltipManager();
  }

  /**
   * Sets the heading level
   * @param {string} level - Heading level (h1, h2, etc.)
   */
  setTitleLevel(level) {
    this.titleLevel = level;
  }

  /**
   * Sets the section description
   * @param {string} description - Description text
   */
  setDescription(description) {
    this.description = description;
  }

  /**
   * Adds a block to the section
   * @param {Block} block - Block to be added
   */
  addBlock(block) {
    this.blocks.push(block);
    if (this.sectionElement) {
      this.sectionElement.appendChild(block.render());
    }
  }

  /**
   * Renders the section
   * @returns {HTMLElement} - DOM element of the section
   */
  render() {
    this.sectionElement = document.createElement("section");
    this.sectionElement.className = "section flex flex-col";

    // Add the title if it exists
    if (this.title) {
      const titleElement = document.createElement(this.titleLevel);
      titleElement.className = "section-title";

      const titleTextElement = document.createElement("span");
      titleTextElement.textContent = this.title;

      // Attach tooltip if provided
      if (this.tooltip) {
        this.tooltipManager.attachTooltip(
          titleTextElement,
          this.tooltip.content,
          this.tooltip.position
        );
      }

      titleElement.appendChild(titleTextElement);
      this.sectionElement.appendChild(titleElement);
    }

    // Set the 'name' attribute if provided
    if (this.name) {
      this.sectionElement.setAttribute("name", this.name);
    }

    // Add description if it exists
    if (this.description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = this.description;
      descriptionElement.className = "section-description";
      this.sectionElement.appendChild(descriptionElement);
    }

    // Render and append blocks
    this.blocks.forEach((block) => {
      this.sectionElement.appendChild(block.render());
    });

    return this.sectionElement;
  }
}
