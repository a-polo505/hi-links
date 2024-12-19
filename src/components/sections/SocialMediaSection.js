import Section from "../base/Section.js";
import Block from "../base/Block.js";
import Button from "../base/Button.js";

export default class SocialMediaSection {
  static create() {
    const linkedInIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="11" fill="#0077B5"/><path d="M9.141 6.047c0 .854-.703 1.547-1.57 1.547C6.703 7.594 6 6.9 6 6.047S6.703 4.5 7.57 4.5c.868 0 1.571.693 1.571 1.547ZM6.349 8.625c0-.19.156-.344.349-.344h1.745c.193 0 .35.154.35.344v6.531c0 .19-.157.344-.35.344H6.698a.346.346 0 0 1-.349-.344V8.625ZM10.188 8.281h1.57c.194 0 .35.154.35.344v.344c.698-.86 1.977-.917 2.617-.86 1.995.179 2.327 2.178 2.269 3.266v3.781c0 .19-.156.344-.35.344h-1.57a.346.346 0 0 1-.349-.344v-3.781c-.058-.458-.384-1.375-1.221-1.375-.838 0-1.338 1.031-1.396 1.375v3.781c0 .19-.157.344-.35.344h-1.57a.346.346 0 0 1-.349-.344V8.625c0-.19.156-.344.35-.344Z" fill="#fff"/></svg>
    `;

    const twitterIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="22" rx="11" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.008 17h.959l3.752-4.268L13.703 17H17l-4.446-6.328L16.636 6h-.975l-3.545 4.041L9.273 6H6l4.297 6.126L6.008 17ZM7.322 6.72h1.48l6.867 9.601h-1.495L7.322 6.72Z" fill="#fff"/></svg>
    `;

    const blueskyIcon = `
      <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg"><path d="M4.769 2.779C7.29 4.636 10.004 8.402 11 10.423v5.338c0-.114-.045.015-.14.291-.52 1.498-2.55 7.343-7.193 2.67-2.445-2.46-1.313-4.92 3.136-5.663-2.545.425-5.407-.277-6.192-3.03C.385 9.237 0 4.36 0 3.701c0-3.3 2.949-2.262 4.769-.922Zm12.462 0C14.71 4.636 11.996 8.402 11 10.423v5.338c0-.114.045.015.14.291.52 1.498 2.55 7.343 7.193 2.67 2.445-2.46 1.313-4.92-3.136-5.663 2.545.425 5.407-.277 6.192-3.03.226-.792.611-5.669.611-6.328 0-3.3-2.949-2.262-4.769-.922Z" fill="currentColor"/></svg>
    `;

    const linkedInButton = new Button({
      label: "linkedin",
      icon: linkedInIcon,
      className: "linkedin-button",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/alina-polozhai-5b64b2227/",
          "_blank"
        ),
    });

    const twitterButton = new Button({
      label: "twitter",
      icon: twitterIcon,
      className: "twitter-button",
      onClick: () => window.open("https://x.com/a_polo505", "_blank"),
    });

    const blueskyButton = new Button({
      label: "bluesky",
      icon: blueskyIcon,
      className: "bluesky-button",
      onClick: () =>
        window.open("https://bsky.app/profile/apolo505.bsky.social", "_blank"),
    });

    const socialBlock = new Block();
    socialBlock.addButton(linkedInButton);
    socialBlock.addButton(twitterButton);
    socialBlock.addButton(blueskyButton);

    const socialSection = new Section("Social Media", "social media");
    socialSection.addBlock(socialBlock);

    return socialSection;
  }
}
