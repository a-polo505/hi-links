export default class DecorativeElement {
  constructor(className, animationStyle, name = null) {
    this.className = className;
    this.animationStyle = animationStyle;
    this.name = name;
  }

  render() {
    const element = document.createElement("div");
    element.className = this.className;

    if (this.animationStyle) {
      element.style.animation = this.animationStyle;
    }
    if (this.name) {
      element.setAttribute("name", this.name);
    }

    return element;
  }
}
