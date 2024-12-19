export default class HolidayEffectManager {
  constructor() {
    this.currentEffect = null;
  }

  /**
   * Initializes the holiday effect.
   * @param {HolidayEffect} effect - Instance of a holiday effect.
   */
  startEffect(effect) {
    this.stopEffect();
    this.currentEffect = effect;
    this.currentEffect.init();
  }

  /**
   * Stops the current holiday effect.
   */
  stopEffect() {
    if (this.currentEffect) {
      this.currentEffect.destroy();
      this.currentEffect = null;
    }
  }
}
