import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class MiscSection {
  static create() {
    const layersIcon = `
      <svg width="22" height="23" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#111827"><path d="m1 12.822.052-7.851c.009-1.422.987-2.64 2.338-2.912L10.854.556c1.793-.361 3.458 1.065 3.446 2.952l-.051 7.852c-.01 1.421-.988 2.639-2.34 2.911l-7.463 1.503C2.652 16.136.988 14.71 1 12.822Z" fill-opacity=".2"/><path d="m4.657 15.955.052-7.853c.008-1.42.987-2.638 2.338-2.91l7.464-1.502c1.794-.362 3.458 1.064 3.446 2.95l-.052 7.854c-.009 1.42-.987 2.638-2.338 2.91l-7.464 1.504c-1.793.36-3.458-1.065-3.446-2.952v-.001Z" fill-opacity=".5"/><path d="m8.314 19.088.052-7.853c.009-1.422.987-2.639 2.338-2.911l7.464-1.503c1.794-.361 3.458 1.065 3.446 2.951l-.052 7.853c-.009 1.421-.987 2.64-2.338 2.91L11.76 22.04c-1.794.361-3.458-1.065-3.446-2.951Z" fill-opacity=".8"/></g><defs><clipPath id="a"><path fill="currentColor" transform="translate(1 .5)" d="M0 0h20.614v21.595H0z"/></clipPath></defs></svg>
    `;

    const dribbbleIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="11""/><path d="M18 11a6.98 6.98 0 0 1-2.061 4.96A6.976 6.976 0 0 1 11 18a7 7 0 1 1 4.939-11.96M18 11a6.98 6.98 0 0 0-2.061-4.96M18 11c-1.021 0-3.839-.385-6.36.722-2.74 1.203-4.723 3.069-5.588 4.23M18 11a6.98 6.98 0 0 1-.441 2.45m-1.62-7.41A7.011 7.011 0 0 0 13.8 4.581M8.375 4.51C9.47 5.52 11.861 8.095 12.75 10.65c.889 2.556 1.218 5.698 1.421 6.592M4.054 10.125c1.322.08 4.823.152 7.063-.805 2.24-.957 4.167-2.716 4.828-3.274m-11.42 7.619a7.027 7.027 0 0 0 3.15 3.496" stroke="#B8519A" stroke-linecap="round" stroke-linejoin="round"/></svg>
    `;

    const layersButton = new Button({
      label: "layers",
      icon: layersIcon,
      className: "layers-button",
      onClick: () => window.open("https://layers.to/apolo505", "_blank"),
    });

    const dribbbleButton = new Button({
      label: "dribbble",
      icon: dribbbleIcon,
      className: "dribbble-button",
      onClick: () => window.open("https://dribbble.com/apolo505", "_blank"),
    });

    const miscBlock = new Block();
    miscBlock.addButton(layersButton);
    miscBlock.addButton(dribbbleButton);

    const miscSection = new Section("Misc", "misc");
    miscSection.addBlock(miscBlock);

    return miscSection;
  }
}
