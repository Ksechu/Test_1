class VerticalLine extends PIXI.Graphics {
    constructor(x, y, interactive) {
      super();

      this.x = x;
      this.y = y; 
      
      this.type = 1;

      this.interactive = interactive;
      this.cursor = 'pointer'; 
      this.hitArea = new PIXI.Rectangle(-7, 0, 14, CELL_SIZE);

      /* 
      this.on('pointermove', function (e) {
        console.log('VerticalLine');
      }); */
      
      this.draw();
    }

    draw() {
      this.lineStyle(7, BLACK, 1);

      this.moveTo(0, 0);
      this.lineTo(0, CELL_SIZE);
    }
}