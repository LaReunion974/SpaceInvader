class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.player = new Player(this);
  
      this.gameOver = false;
    }
  
    render(ctx) {
      this.player.draw(ctx);
      this.player.update()
    }
  }
  