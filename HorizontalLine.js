class HorizontalLine extends PIXI.Graphics {
    constructor(x, y, interactive) {
      super();

      this.x = x;
      this.y = y;      

      this.interactive = interactive;
      this.cursor = 'pointer'; 
      this.hitArea = new PIXI.Rectangle(0, 0, CELL_SIZE, 5)
      /* 
      this.on('pointermove', function (e) {
        console.log('HorizontalLine');
      }); */
      
      this.draw();
    }

    draw() {
      this.lineStyle(5, BLACK, 1);

      this.moveTo(0, 0);
      this.lineTo(CELL_SIZE, 0);
    }
}