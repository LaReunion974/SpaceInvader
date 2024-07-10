class Player {
  game;

  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 100;
    this.x = this.game.width * 0.5 - this.width * 0.5;
    this.y = this.game.height - this.height;
    this.speed = 5;
  }

  draw(context) {
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
  update() {
    this.x += this.speed;

  }
}
