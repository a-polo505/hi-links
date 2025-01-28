import Button from "../base/Button.js";
import ThemeUtils from "../../services/ThemeService.js";
import HolidayEffectManager from "../../assets/utils/HolidayEffectManager.js";
import SnowEffect from "../../assets/effects/SnowEffect.js";

export default class ThemedContainer {
  constructor() {
    this.themeButton = null;
    this.holidayButton = null;
    this.effectManager = new HolidayEffectManager();
    this.themeIcons = {
      light: `
        <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.111 2.111V2a1 1 0 0 0-1-1h-.222a1 1 0 0 0-1 1v.593a1 1 0 0 0 1 1h.222a1 1 0 0 0 1-1V2.11ZM11 13.963a2.963 2.963 0 1 0 0-5.926 2.963 2.963 0 0 0 0 5.926Zm0 2.222a5.185 5.185 0 1 0 0-10.37 5.185 5.185 0 0 0 0 10.37Zm.111 2.222a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-.222a1 1 0 0 1-1-1v-.593a1 1 0 0 1 1-1h.222Zm7.296-7.518a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v.222a1 1 0 0 1-1 1h-.593a1 1 0 0 1-1-1v-.222Zm-16.296-1H2a1 1 0 0 0-1 1v.222a1 1 0 0 0 1 1h.593a1 1 0 0 0 1-1v-.222a1 1 0 0 0-1-1H2.11ZM16.16 5.684a1 1 0 0 1 0-1.415l.079-.078.262-.262.078-.079a1 1 0 0 1 1.415 0l.157.158a1 1 0 0 1 0 1.414l-.079.078-.262.262-.078.079a1 1 0 0 1-1.415 0l-.157-.157ZM3.93 16.5l-.079.078a1 1 0 0 0 0 1.415l.158.157a1 1 0 0 0 1.414 0l.078-.079.262-.262.079-.078a1 1 0 0 0 0-1.415l-.157-.157a1 1 0 0 0-1.415 0l-.078.079-.262.262ZM5.684 5.84a1 1 0 0 1-1.415 0l-.078-.078-.262-.262-.079-.078a1 1 0 0 1 0-1.414l.158-.158a1 1 0 0 1 1.414 0l.078.079.262.262.079.078a1 1 0 0 1 0 1.415l-.157.157ZM16.5 18.072l.078.079a1 1 0 0 0 1.414 0l.158-.158a1 1 0 0 0 0-1.414l-.079-.078-.262-.262-.078-.079a1 1 0 0 0-1.415 0l-.157.157a1 1 0 0 0 0 1.415l.079.078.262.262Z" fill="currentColor"/></svg>`,
      dark: `
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5312 3.4375C17.0835 3.4375 17.5312 3.88522 17.5312 4.4375V4.46875V4.46875C17.5312 4.84845 17.8391 5.15625 18.2188 5.15625V5.15625H18.25C18.8023 5.15625 19.25 5.60397 19.25 6.15625V6.21875C19.25 6.77103 18.8023 7.21875 18.25 7.21875H18.2188V7.21875C17.8391 7.21875 17.5312 7.52655 17.5312 7.90625V7.90625V7.9375C17.5312 8.48978 17.0835 8.9375 16.5312 8.9375H16.4688C15.9165 8.9375 15.4688 8.48978 15.4688 7.9375V7.90625V7.90625C15.4688 7.52655 15.1609 7.21875 14.7812 7.21875V7.21875H14.75C14.1977 7.21875 13.75 6.77103 13.75 6.21875V6.15625C13.75 5.60397 14.1977 5.15625 14.75 5.15625H14.7812V5.15625C15.1609 5.15625 15.4688 4.84845 15.4688 4.46875V4.46875V4.4375C15.4688 3.88522 15.9165 3.4375 16.4688 3.4375H16.5312ZM7.5625 7.21874C7.5625 7.09003 7.41205 7.01821 7.31876 7.10688C6.19808 8.17204 5.5 9.67694 5.5 11.3438C5.5 14.5712 8.11634 17.1875 11.3438 17.1875C13.0106 17.1875 14.5155 16.4894 15.5806 15.3687C15.6693 15.2754 15.5975 15.125 15.4688 15.125V15.125C11.1022 15.125 7.5625 11.5852 7.5625 7.21874V7.21874ZM3.4375 11.3438C3.4375 8.14628 5.33512 5.39432 8.06292 4.14854C8.41589 3.98734 8.82678 4.0833 9.10117 4.35768L9.52259 4.7791C9.79698 5.05349 9.88031 5.46025 9.78897 5.8374C9.68189 6.27953 9.625 6.74196 9.625 7.21874C9.625 10.4461 12.2413 13.0625 15.4688 13.0625C15.9456 13.0625 16.408 13.0056 16.8502 12.8985C17.2273 12.8072 17.6341 12.8905 17.9084 13.1649L18.3298 13.5863C18.6042 13.8607 18.7002 14.2716 18.539 14.6245C17.2932 17.3524 14.5412 19.25 11.3438 19.25C6.97724 19.25 3.4375 15.7103 3.4375 11.3438Z" fill="currentColor"/>
        </svg>`,
    };
    this.specialThemeIcon = `
      <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="path-1" d="M18.843 6.336c.267-1.129.424-1.747 0-2-.255-.154-.629-.211-1.078-.167a8.448 8.448 0 0 0-3.35 1.045c-.454.251-1.047.774-1.113 1.008-.082.29.053.7.303.92.061.054.345.18.633.278 1.132.392 2.692.553 3.8.392.42-.06.613-.154.852-.413.332-.359.064-.252-.047-1.063ZM10.482 3.867c-.61-1.015-1.356-1.816-2.355-2.531-.311-.224-.39-.26-.7-.326-.676-.144-1.084 1.326-1.202 1.826-.551.699-1.141.66-.942 1.202.105.284.366.53.942.89.609.38 1.204.662 1.902.9.663.225 1.585.408 1.814.36.33-.069.902-.337.902-.852.063-.236-.098-1.03-.361-1.469Z" fill="#525DD4"/><path d="M11.967 6.368a.915.915 0 0 0 1.117-.627.884.884 0 0 0-.645-1.086l-.125-.033a.916.916 0 0 0-1.117.627c-.13.473.159.96.645 1.086l.125.033ZM7.766 20.959a.915.915 0 0 0 1.116-.627c.13-.473-.306-.49-.793-.616l-.589-.157c-.486-.126-.838-.316-.968.157s.158.96.645 1.086l.589.157Z" fill="#CDA43C"/><path d="M15.196 10.886c-.165-1.537-1.272-2.967-2.8-3.617-.359-.152-1.355-.373-1.731-.384-1.826-.05-3.426.861-4.344 2.471-.059.102-.306.842-.55 1.645-.362 1.19-.482 1.53-.644 1.833-.558 1.04-1.339 1.9-2.392 2.63a1.5 1.5 0 0 0-.594.833l-.02.072c-.104.38-.154.55-.097.674.048.105.17.178.396.316.953.587 3.123 1.35 5.885 2.07 3.23.841 5.795 1.235 6.588 1.011a.316.316 0 0 0 .221-.22l.152-.552a1.312 1.312 0 0 0-.079-.908c-.541-1.146-.79-2.32-.739-3.498.014-.345.083-.678.388-1.9.394-1.575.43-1.825.36-2.476Z" fill="url(#a)"/><path class="path-2" d="M17.68 9.46c-.477-.422-.843-.644-1.56-.942-.153-.063-.761-.19-.972-.2a.1.1 0 0 0-.092.148l.13.224c.285.497.403.754.603 1.31.199.553.39 1.281.468 1.787.032.206.073.402.091.436.043.077.207.122.282.075.033-.02.207-.253.389-.518.182-.265.333-.482.336-.481.017.004 1.354.133 1.444.14a.289.289 0 0 0 .181-.061c.069-.06.074-.08.05-.183-.032-.144-.497-.832-.8-1.184a7.012 7.012 0 0 0-.55-.55ZM7.836 6.7a5.258 5.258 0 0 0-.325-.133c-.22-.077-.81-.188-1.128-.211-.641-.046-1.477.068-2.146.293-.477.162-1.174.477-1.273.575-.074.075-.08.093-.05.174.006.017.011.03.018.043.034.064.128.102.827.395.342.143.625.266.63.273.004.008.028.256.052.552.025.295.06.563.078.594.018.031.077.067.13.08.133.034.18 0 .46-.32.326-.377.865-.88 1.323-1.239a6.911 6.911 0 0 1 1.2-.784l.21-.113a.098.098 0 0 0-.006-.179Z" fill="#525DD4"/><defs><linearGradient id="a" x1="12.065" y1="19.919" x2="5.592" y2="2.583" gradientUnits="userSpaceOnUse"><stop stop-color="#CDA43C"/><stop offset="1" stop-color="#FFF69D" stop-opacity=".8"/></linearGradient></defs></svg>
    `;
  }

  render() {
    const container = document.createElement("div");
    container.className = "theme-container flex";

    this.themeButton = new Button({
      icon: this.getCurrentThemeIcon(),
      className: "theme-button",
      ariaLabel: "Change theme",
      onClick: () => this.handleThemeChange(),
    });

    this.holidayButton = new Button({
      icon: this.specialThemeIcon,
      className: "holiday-button",
      ariaLabel: "Select holiday special theme",
      onClick: () => this.handleHolidayMode(),
    });

    container.appendChild(this.themeButton.render());
    // container.appendChild(this.holidayButton.render());

    // this.initializeSpecialTheme();

    return container;
  }

  handleThemeChange() {
    const newTheme = ThemeUtils.toggleTheme();
    this.updateThemeIcon(newTheme);

    this.effectManager.stopEffect();
  }

  handleHolidayMode() {
    const newTheme = ThemeUtils.toggleSpecialTheme();

    if (newTheme === ThemeUtils.SPECIAL_THEME) {
      const effect = new SnowEffect();
      this.effectManager.startEffect(effect);
    } else {
      this.effectManager.stopEffect();
    }
  }

  /**
   * Updates theme icon dynamically.
   * @param {string} newTheme - The newly applied theme.
   */
  updateThemeIcon(newTheme) {
    const newIcon =
      newTheme === "dark" ? this.themeIcons.dark : this.themeIcons.light;
    this.themeButton.buttonElement.querySelector(".button-icon").innerHTML =
      newIcon;
  }

  initializeSpecialTheme() {
    if (ThemeUtils.getCurrentTheme() === ThemeUtils.SPECIAL_THEME) {
      const effect = new SnowEffect();
      this.effectManager.startEffect(effect);
    }
  }

  getCurrentThemeIcon() {
    const currentTheme = ThemeUtils.getCurrentTheme();
    return currentTheme === "dark"
      ? this.themeIcons.dark
      : this.themeIcons.light;
  }
}
