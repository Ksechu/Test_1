class Grid extends PIXI.Container {
    constructor(topLeftX, topLeftY, n, cellSize) {
      super();

      this.x = topLeftX
      this.y = topLeftY;

      this.n = n;

      this.gridSize = this.n * cellSize;
      this.cellSize = cellSize;

      this.rect = new PIXI.Graphics();

      this.draw();
      this.addChild(this.rect);
    }

    draw() {
      
      this.rect.beginFill(GREY);
      this.rect.drawRect(0, 0, this.gridSize, this.gridSize);
      this.rect.endFill();

      this.rect.lineStyle(1, BLUE, 0.5);

      for (let i = 0; i <= this.n; i++) {
        this.rect.moveTo(i * this.cellSize, 0);
        this.rect.lineTo(i * this.cellSize, this.gridSize);
      }

      for (let j = 0; j <= this.n; j++) {
        this.rect.moveTo(0, j * this.cellSize);
        this.rect.lineTo(this.gridSize, j * this.cellSize);
      }   
      
    }
  }