const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const M = 50, WIDTH = 1024, HEIGHT = 720;

function boot() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundAlpha: 1,
    background: WHITE,
  });
  
  document.body.appendChild(app.view);

  // const square = new PIXI.Graphics();

  let grid = new Grid(7, M, 0, 0);

  grid.position.set(100, 100);

  app.stage.addChild(grid);
}