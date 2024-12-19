import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class CodeSection {
  static create() {
    const svgIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.858 0C4.706 0 0 4.79 0 11.1c0 5.045 3.096 9.362 7.518 10.882.568.104.767-.255.767-.551 0-.282-.013-1.838-.013-2.793 0 0-3.105.682-3.757-1.356 0 0-.505-1.324-1.233-1.665 0 0-1.015-.714.071-.7 0 0 1.105.09 1.712 1.173.972 1.756 2.6 1.251 3.234.951.102-.728.39-1.233.71-1.533-2.48-.282-4.982-.65-4.982-5.027 0-1.25.338-1.879 1.047-2.68-.115-.295-.492-1.514.116-3.088.927-.296 3.06 1.228 3.06 1.228.887-.255 1.84-.386 2.786-.386.944 0 1.898.131 2.785.386 0 0 2.133-1.528 3.06-1.228.608 1.578.231 2.793.116 3.089.71.805 1.144 1.433 1.144 2.68 0 4.39-2.612 4.74-5.092 5.026.408.36.754 1.042.754 2.11 0 1.534-.013 3.43-.013 3.804 0 .296.204.655.767.55C18.993 20.462 22 16.145 22 11.1 22 4.79 17.01 0 10.858 0Z" fill="currentColor"/></svg>
    `;

    const githubButton = new Button({
      label: "github",
      icon: svgIcon,
      className: "github-button",
      onClick: () => window.open("https://github.com/a-polo505", "_blank"),
    });

    const codeBlock = new Block();
    codeBlock.addButton(githubButton);

    const codeSection = new Section("Code", "code");
    codeSection.addBlock(codeBlock);

    return codeSection;
  }
}
