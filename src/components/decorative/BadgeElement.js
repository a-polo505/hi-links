export default class BadgeElement {
  constructor(defaultText = "") {
    this.state = "circle";
    this.text = defaultText;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = "badge circle";

    this.pulseElement = document.createElement("div");
    this.pulseElement.className = "pulse-element";
    this.element.appendChild(this.pulseElement);

    this.textElement = document.createElement("span");
    this.textElement.className = "badge-text";
    this.textElement.textContent = this.text;
    this.textElement.style.opacity = "0";
    this.element.appendChild(this.textElement);

    this.element.addEventListener("mouseenter", () =>
      this.updateState("rectangle")
    );
    this.element.addEventListener("mouseleave", () =>
      this.updateState("circle")
    );

    return this.element;
  }

  updateState(state) {
    this.state = state;
    this.element.className = `badge ${this.state} flex align-items-center justify-content-center`;

    if (state === "rectangle") {
      setTimeout(() => {
        this.textElement.style.opacity = "1";
      }, 120);
    } else {
      this.textElement.style.opacity = "0";
    }
  }
}
