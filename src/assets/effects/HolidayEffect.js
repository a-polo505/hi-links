export default class HolidayEffect {
  constructor() {
    if (new.target === HolidayEffect) {
      throw new Error("Cannot instantiate an abstract class.");
    }
    this.container = null;
    this.canvas = null;
    this.context = null;
  }

  init() {
    throw new Error("init() must be implemented by subclasses.");
  }

  /**
   * Cleans up the effect: removes the container and cancels animations.
   */
  destroy() {
    if (this.container) {
      cancelAnimationFrame(this.animationFrameId);
      document.body.removeChild(this.container);
      this.container = null;
      this.canvas = null;
      this.context = null;
    }
  }
}
