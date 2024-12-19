import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class MainSection {
  static create() {
    const websiteIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><mask id="a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22"><path clas="path-1" d="M16.867 0H5.133A5.133 5.133 0 0 0 0 5.133v11.734A5.133 5.133 0 0 0 5.133 22h11.734A5.133 5.133 0 0 0 22 16.867V5.133A5.133 5.133 0 0 0 16.867 0Z" fill="#fff"/></mask><g mask="url(#a)"><path class="path-2" d="M16.867 0H5.133A5.133 5.133 0 0 0 0 5.133v11.734A5.133 5.133 0 0 0 5.133 22h11.734A5.133 5.133 0 0 0 22 16.867V5.133A5.133 5.133 0 0 0 16.867 0Z" fill="url(#b)"/><path class="path-3" fill-rule="evenodd" clip-rule="evenodd" d="M0 22h5.373l4.897-4.64h6.707L12.919 22H22V0h-5.023L0 22Zm18-10.168s-1.67.167-2.707.418c-1.228.299-3.036 1.075-3.036 1.075l6.228-8.774L18 11.832Z" fill="url(#c)"/></g><defs><linearGradient id="b" x1="11" y1="0" x2="11" y2="38.683" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#D9C7FF"/></linearGradient><linearGradient id="c" x1="12.474" y1="-15.232" x2="12.474" y2="32.952" gradientUnits="userSpaceOnUse"><stop stop-color="#351DD7"/><stop offset="1" stop-color="#A2BBFF"/></linearGradient></defs></svg>
    `;

    const bentoIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path class="path-0" fill-rule="evenodd" clip-rule="evenodd" d="M2.87 14.565c-1.033-.798-1.55-1.197-1.742-1.657L1 12.282V9.714h.65v1.278c.286-.264.683-.571 1.22-.986l5.16-3.99C9.062 5.22 9.578 4.82 10.173 4.67a3.339 3.339 0 0 1 1.611 0c.595.15 1.112.549 2.144 1.346l5.16 3.99c.537.415.934.722 1.219.986V9.714h.65v2.572c0 .21-.042.42-.127.622-.193.46-.71.86-1.742 1.657l-5.16 3.99c-1.032.798-1.549 1.197-2.144 1.346a3.34 3.34 0 0 1-1.61 0c-.596-.15-1.112-.548-2.144-1.346l-5.16-3.99Z"/><path class="path-fill" d="M2.87 11.994c-1.033-.798-1.55-1.197-1.742-1.657-.17-.405-.17-.84 0-1.245.193-.46.71-.86 1.741-1.657l5.16-3.99c1.033-.798 1.55-1.197 2.144-1.346a3.339 3.339 0 0 1 1.611 0c.595.15 1.112.548 2.144 1.346l5.16 3.99c1.033.798 1.549 1.197 1.742 1.657.17.404.17.84 0 1.245-.193.46-.71.859-1.742 1.657l-5.16 3.99c-1.032.798-1.549 1.196-2.144 1.346a3.338 3.338 0 0 1-1.61 0c-.596-.15-1.112-.548-2.144-1.346l-5.16-3.99Z"/><path class="path-1" d="M8.767 7.055c-.516-.4-.774-.599-.871-.829a.792.792 0 0 1 0-.623c.097-.23.355-.43.87-.828l.738-.57c.516-.399.774-.599 1.072-.673a1.67 1.67 0 0 1 .805 0c.298.074.556.274 1.072.673l.737.57c.516.399.774.598.87.828a.791.791 0 0 1 0 .623c-.096.23-.354.43-.87.829l-.737.57c-.516.399-.774.598-1.072.673a1.669 1.669 0 0 1-.805 0c-.298-.075-.556-.274-1.072-.673l-.737-.57Z"/><path class="path-2" d="M13.683 10.854c-.516-.399-.774-.598-.871-.828a.792.792 0 0 1 0-.623c.097-.23.355-.43.87-.829l.738-.57c.516-.398.774-.598 1.072-.673.261-.065.543-.065.805 0 .298.075.556.275 1.072.674l.737.57c.516.398.774.598.87.828a.791.791 0 0 1 0 .623c-.096.23-.354.43-.87.828l-.737.57c-.516.4-.774.599-1.072.673a1.668 1.668 0 0 1-.805 0c-.298-.074-.556-.274-1.072-.673l-.737-.57Z"/><path class="path-3" d="M3.853 10.854c-.517-.399-.775-.598-.871-.828a.792.792 0 0 1 0-.623c.096-.23.354-.43.87-.829l.738-.57c.516-.398.774-.598 1.072-.673.261-.065.543-.065.805 0 .298.075.556.275 1.072.674l5.652 4.369c.516.399.774.598.87.829a.791.791 0 0 1 0 .622c-.096.23-.354.43-.87.829l-.737.57c-.516.399-.774.598-1.072.673a1.668 1.668 0 0 1-.806 0c-.297-.075-.555-.274-1.071-.673l-5.652-4.37Z"/></svg>
    `;

    const emailIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m20.062 2.068-17.37 8.59c-.985.487-.9 1.854.137 2.228l3.113 1.125 8.504-6.15c.488-.354 1.1.257.704.704l-6.726 7.6v2.224c0 .12.038.239.109.34.07.1.17.178.288.225a.673.673 0 0 0 .7-.134l2.68-2.55 5.057 1.826a1.346 1.346 0 0 0 1.114-.094 1.26 1.26 0 0 0 .415-.377c.106-.154.175-.329.2-.511l2.007-14.422a.584.584 0 0 0-.048-.327.618.618 0 0 0-.22-.254.663.663 0 0 0-.666-.042h.002Z"/></svg>
    `;

    const websiteButton = new Button({
      label: "website",
      icon: websiteIcon,
      className: "website-button",
      onClick: () =>
        window.open("https://a-polo505.github.io/alinapolozhai/", "_blank"),
    });

    const bentoButton = new Button({
      label: "bento.me",
      icon: bentoIcon,
      className: "bento-button",
      onClick: () => window.open("https://bento.me/alina-polozhai", "_blank"),
    });

    const emailButton = new Button({
      label: "email",
      icon: emailIcon,
      className: "email-button",
      onClick: () => window.open("mailto:polozhai.alina@hotmail", "_blank"),
    });

    const mainBlock = new Block();
    mainBlock.addButton(websiteButton);
    mainBlock.addButton(bentoButton);
    mainBlock.addButton(emailButton);

    const mainSection = new Section("Find Me Here", "main", {
      content: "I'm not even hiding 👀",
      position: "right",
    });
    mainSection.setTitleLevel("h1");
    mainSection.setDescription(
      "Looking for a link to connect with me? Everything you need is just a click away."
    );
    mainSection.addBlock(mainBlock);

    return mainSection;
  }
}
