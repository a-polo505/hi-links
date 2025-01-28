import ThemeUtils from "../../services/ThemeService.js";

const ALLOWED_THEMES = ["light", "dark"];

export function resetInvalidTheme() {
    const currentTheme = ThemeUtils.getCurrentTheme();
  
    if (!ALLOWED_THEMES.includes(currentTheme)) {
      ThemeUtils.applyTheme("light");
    }
  }