export default class Page {
  constructor() {
    this.headerElement = null;
    this.mainElement = null;
    this.footerElement = null;
  }

  /**
   * Initializes the main container structure: header, main, and footer
   */
  initializeContainer() {
    this.headerElement = this.createElement("header", "header");
    this.mainElement = this.createElement(
      "main",
      "flex flex-col flex-nowrap align-content-center align-items-center justify-content-start"
    );
    this.footerElement = this.createElement(
      "footer",
      "footer flex align-content-center align-items-center justify-content-center"
    );

    document.body.append(
      this.headerElement,
      this.mainElement,
      this.footerElement
    );
  }

  /**
   * Creates an HTML element with a specified tag and class name
   * @param {string} tag - The HTML tag name
   * @param {string} className - The class name(s) to apply
   * @returns {HTMLElement} - Created HTML element
   */
  createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  /**
   * Adds content to the header
   * @param {Object} header - Instance of the Header class
   */
  addHeaderContent(header) {
    this.appendContent(this.headerElement, header.render());
    this.headerElement.setAttribute("role", "banner");
  }

  /**
   * Adds content to the main container
   * @param {HTMLElement} element - Element to append to the main container
   */
  addMainContent(element) {
    this.appendContent(this.mainElement, element);
    this.mainElement.setAttribute("role", "main");
  }

  /**
   * Adds content to the footer
   * @param {Object} footer - Instance of the Footer class
   */
  addFooterContent(footer) {
    this.appendContent(this.footerElement, footer.render());
    this.footerElement.setAttribute("role", "contentinfo");
  }

  /**
   * Appends content to a specified container if it exists
   * @param {HTMLElement} container - Target container element
   * @param {HTMLElement} content - Content to append
   */
  appendContent(container, content) {
    if (container) {
      container.appendChild(content);
    }
  }
}
