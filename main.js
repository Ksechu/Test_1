const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const BLACK = 0x000000;
const M = 50, WIDTH = 1024, HEIGHT = 720;

function boot() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundAlpha: 1,
    background: WHITE,
  });
  
  var renderer = PIXI.autoDetectRenderer(620, 380);

  document.body.appendChild(app.view);

  let grid = new Grid(7, M, 0, 0);

  grid.position.set(100, 100);

  app.stage.addChild(grid);


  let grid2 = new Grid(7, M, 0, 0);

  grid2.position.set(500, 100);

  app.stage.addChild(grid2);


  let line1 = new HorizontalLine(3*M,4*M);

  line1.position.set(300, 320, true);

  app.stage.addChild(line1);
}