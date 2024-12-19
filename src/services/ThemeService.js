export default class ThemeUtils {
  static DARK_THEME = "dark";
  static SPECIAL_THEME = "special";

  /**
   * Gets the current theme (checks data-theme attribute or sets default based on date).
   * @returns {string} Current theme: 'dark', 'special', or 'light' (default).
   */
  static getCurrentTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }
    return "light";
  }

  /**
   * Applies the specified theme.
   * @param {string} theme - Theme to apply: 'dark', 'special', or 'light'.
   */
  static applyTheme(theme) {
    if (theme === ThemeUtils.DARK_THEME || theme === ThemeUtils.SPECIAL_THEME) {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }

  /**
   * Toggles between 'light' and 'dark' themes.
   * @returns {string} The new active theme.
   */
  static toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === this.DARK_THEME ? "light" : this.DARK_THEME;
    this.applyTheme(newTheme);
    return newTheme;
  }

  /**
   * Toggles a special holiday theme.
   * @returns {string} The new active theme.
   */
  static toggleSpecialTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme =
      currentTheme === this.SPECIAL_THEME ? "light" : this.SPECIAL_THEME;
    this.applyTheme(newTheme);
    return newTheme;
  }
}
