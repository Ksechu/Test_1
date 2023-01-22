const LEVELS = [
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

function boot() {
  const app = new PIXI.Application({
    width: WIDTH,
    height: HEIGHT,
    backgroundAlpha: 1,
    background: WHITE,
  });

  document.body.appendChild(app.view);

  app.stage.interactive = true;
  app.stage.hirArea = app.screen;

  const control = new LevelController(LEVELS, app.stage);

  control.loadLevel();

  //control.clearLevel();
}