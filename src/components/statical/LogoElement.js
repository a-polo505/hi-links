export default class LogoElement {
  constructor(src, alt = "") {
    this.src = src;
    this.alt = alt;
  }

  render() {
    const logo = document.createElement("img");
    logo.src = this.src;
    logo.alt = this.alt;
    logo.className = "logo";
    logo.loading = "lazy";
    return logo;
  }
}
