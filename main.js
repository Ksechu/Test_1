const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const BLACK = 0x000000;
const CELL_SIZE = 50, WIDTH = 1024, HEIGHT = 720;

const LEVEL1 = [
  { i: 2, j: 4, type: 0 },
  { i: 2, j: 3, type: 2 },
  { i: 1, j: 4, type: 1 },
  { i: 5, j: 3, type: 2 }
];

const ELEMENTS_FACTORY = [
  (x, y, interactive) => new HorizontalLine(x, y, interactive),
  (x, y, interactive) => new VerticalLine(x, y, interactive),
  (x, y, interactive) => new Circle(x, y, interactive),
];

function boot() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundAlpha: 1,
    background: WHITE,
  });

  document.body.appendChild(app.view);

  const grid = new Grid(100, 100, 7, CELL_SIZE);

  app.stage.addChild(grid);


  const grid2 = new Grid(500, 100, 7, CELL_SIZE);

  app.stage.addChild(grid2);


  LEVEL1.forEach((levelElement) => {
    const x = grid2.x + levelElement.i * CELL_SIZE;
    const y = grid2.y + levelElement.j * CELL_SIZE;

    const element = ELEMENTS_FACTORY[levelElement.type](x, y, false);

    app.stage.addChild(element);
  });


  /* const line1 = new HorizontalLine(7*CELL_SIZE, 11*CELL_SIZE, true);

  app.stage.addChild(line1);*/
}