const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const BLACK = 0x000000;
const CELL_SIZE = 50, WIDTH = 1024, HEIGHT = 720;

const LEVEL = [
  [
    { i: 2, j: 4, type: 0 },
    { i: 2, j: 3, type: 2 },
    { i: 1, j: 4, type: 1 },
    { i: 5, j: 3, type: 2 }
  ],
  [
    { i: 3, j: 3, type: 1 },
    { i: 1, j: 3, type: 1 },
    { i: 5, j: 3, type: 2 },
    { i: 2, j: 3, type: 0 },
    { i: 4, j: 3, type: 2 },
    { i: 2, j: 4, type: 0 }
  ],
  [
    { i: 1, j: 4, type: 1 },
    { i: 2, j: 4, type: 0 },
    { i: 1, j: 2, type: 2 },
    { i: 5, j: 2, type: 0 },
    { i: 4, j: 4, type: 1 },
    { i: 2, j: 2, type: 0 },
    { i: 1, j: 5, type: 2 },
    { i: 3, j: 2, type: 0 }
  ]
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

  const control = new LevelController(LEVEL, app.stage);

  control.loadLevel();

  //control.clearLevel();
}