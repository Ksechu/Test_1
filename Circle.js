class Circle extends PIXI.Graphics {
    constructor(x, y, interactive) {
      super();

      this.x = x;
      this.y = y;      

      this.interactive = interactive;
      this.cursor = 'pointer'; 
      this.hitArea = new PIXI.Circle(0, 0, 10)
      /* 
      this.on('pointermove', function (e) {
        console.log('Circle');
      }); */
      
      this.draw();
    }

    draw() {
      this.lineStyle(5, BLACK, 1);

      this.beginFill(BLACK);
      this.drawCircle(0, 0, 10);
      this.endFill();
    }
}