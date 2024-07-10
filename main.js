window.addEventListener("load", (e) => {
  console.log("e", e);
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  console.log("ctx", ctx);
  canvas.width = 600;
  canvas.height = 800;

  let game = new Game(canvas);
  let player = new Player(game);

 


  // création de ta loop
  function animate(){
    ctx.clearRect(0,0, canvas.width,canvas.height)
    game.render(ctx);
    requestAnimationFrame(animate)
  };

  animate();

});
