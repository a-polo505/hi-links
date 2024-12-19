export default class SnowEffect {
  constructor() {
    this.container = null;
    this.canvas = null;
    this.context = null;
    this.snowflakes = [];
    this.animationFrameId = null;
    this.handleResize = this.handleResize.bind(this);
    this.isMobile = window.innerWidth <= 768;
  }

  init() {
    if (this.container) return;

    this.container = document.createElement("div");
    this.container.className = "snow-effect-container";
    this.container.style.position = "fixed";
    this.container.style.top = "0";
    this.container.style.left = "0";
    this.container.style.width = "100%";
    this.container.style.height = "100%";
    this.container.style.pointerEvents = "none";
    this.container.style.zIndex = "9999";

    this.canvas = document.createElement("canvas");
    this.container.appendChild(this.canvas);
    document.body.appendChild(this.container);

    this.context = this.canvas.getContext("2d");

    this.updateCanvasSize();
    this.createSnowflakes();
    this.startAnimation();

    window.addEventListener("resize", this.handleResize);
  }

  /**
   * Cleans up the snow effect: removes container and cancels animation.
   */
  destroy() {
    if (this.container) {
      cancelAnimationFrame(this.animationFrameId);
      document.body.removeChild(this.container);
      this.container = null;
      this.canvas = null;
      this.context = null;
      this.snowflakes = [];
      window.removeEventListener("resize", this.handleResize);
    }
  }

  updateCanvasSize() {
    if (this.canvas) {
      const width = window.innerWidth;
      const height = window.innerHeight;

      this.canvas.width = width;
      this.canvas.height = height;

      this.isMobile = width <= 768;
      this.createSnowflakes();
    }
  }

  handleResize() {
    this.updateCanvasSize();
  }

  createSnowflakes() {
    const numberOfFlakes = this.isMobile ? 50 : 100;
    const maxRadius = this.isMobile ? 1 : 3;
    const maxSpeed = this.isMobile ? 0.5 : 1;

    this.snowflakes = [];

    for (let i = 0; i < numberOfFlakes; i++) {
      this.snowflakes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        radius: Math.random() * maxRadius + 1,
        speed: Math.random() * maxSpeed + 0.5,
      });
    }
  }

  startAnimation() {
    const animate = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > this.canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * this.canvas.width;
        }

        this.context.beginPath();
        this.context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        this.context.fillStyle = "rgba(255, 255, 255, 0.8)";
        this.context.fill();
      });

      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }
}
