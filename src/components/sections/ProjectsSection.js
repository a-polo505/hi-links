import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class ProjectsSection {
  static create() {
    const widgetIcon = `
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="path-1" d="M19.4018 13.9417L13.5981 10.5912C12.1632 9.76284 9.83678 9.76284 8.40187 10.5912L2.59816 13.9417C1.16325 14.7701 1.16325 16.1131 2.59816 16.9415L8.40187 20.292C9.83678 21.1203 12.1632 21.1203 13.5981 20.292L19.4018 16.9415C20.8367 16.1131 20.8367 14.7701 19.4018 13.9417Z" fill="#45059D"/>
        <path class="path-2" d="M19.4018 9.85038L13.5981 6.4999C12.1632 5.67153 9.83678 5.67153 8.40187 6.4999L2.59816 9.85038C1.16325 10.6788 1.16325 12.0218 2.59816 12.8502L8.40187 16.2007C9.83678 17.029 12.1632 17.029 13.5981 16.2007L19.4018 12.8502C20.8367 12.0218 20.8367 10.6788 19.4018 9.85038Z" fill="url(#paint0_linear_144_56)"/>
        <path class="path-3" d="M19.4018 5.85038L13.5981 2.4999C12.1632 1.67153 9.83678 1.67153 8.40187 2.4999L2.59816 5.85038C1.16325 6.67875 1.16325 8.02181 2.59816 8.85018L8.40187 12.2007C9.83678 13.029 12.1632 13.029 13.5981 12.2007L19.4018 8.85018C20.8367 8.02181 20.8367 6.67875 19.4018 5.85038Z" fill="url(#paint1_linear_144_56)"/>
        <defs>
        <linearGradient id="paint0_linear_144_56" x1="5" y1="2" x2="19.9193" y2="11.3848" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E3D2F8"/>
          <stop offset="1" stop-color="#8118FB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_144_56" x1="9" y1="9.74312e-08" x2="19.462" y2="9.45873" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EAE1F8"/>
          <stop offset="1" stop-color="#B78BFE"/>
        </linearGradient>
        </defs>
      </svg>
      `;

    const gumroadIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg">  <path class="path-1" d="M11.51 20.362c5.253 0 9.511-4.11 9.511-9.181 0-5.07-4.258-9.181-9.51-9.181C6.258 2 2 6.11 2 11.181c0 5.07 4.258 9.18 9.51 9.18Z"></path>
        <path class="path-2" d="M10 19c4.955 0 9-4.013 9-9s-4.045-9-9-9-9 4.013-9 9 4.045 9 9 9Z" stroke-width="1"></path>
        <path class="path-3" d="M9.28 14.934c-2.809 0-4.46-2.269-4.46-5.091 0-2.934 1.817-5.314 5.286-5.314 3.58 0 4.79 2.436 4.846 3.82h-2.588c-.056-.776-.716-1.938-2.313-1.938-1.707 0-2.809 1.495-2.809 3.321s1.102 3.32 2.809 3.32c1.542 0 2.202-1.217 2.478-2.434H10.05V9.62h5.2v5.092h-2.282v-3.21c-.165 1.162-.88 3.431-3.69 3.431Z"></path>
      </svg>
    `;

    const widgetButton = new Button({
      label: "widget dashboard",
      icon: widgetIcon,
      className: "dashboard-button",
      onClick: () =>
        window.open("https://dashboard-a-polo505.vercel.app", "_blank"),
    });

    const gumroadButton = new Button({
      label: "gumroad",
      icon: gumroadIcon,
      className: "gumroad-button",
      onClick: () => window.open("https://apolo505.gumroad.com/", "_blank"),
    });

    const projectsBlock = new Block();
    projectsBlock.addButton(widgetButton);
    projectsBlock.addButton(gumroadButton);

    const projectsSection = new Section("Projects", "projects", {
      content: "Create. <s>Eat</s>. <s>Sleep</s>.",
      position: "right",
    });
    projectsSection.addBlock(projectsBlock);

    return projectsSection;
  }
}
