class HorizontalLine extends PIXI.Graphics {
    constructor(xStart, yStart, tf) {
      super();

      this.xStart = xStart;
      this.yStart = yStart;

      this.rect = new PIXI.Graphics();

      this.draw();      

      this.rect.interactive = tf;
      this.rect.cursor = 'pointer'; 

      this.rect.on('mousemove', function (e) {
        console.log('Dragging');
      });

      this.addChild(this.rect); 
    }

    draw() {
      this.rect.lineStyle(5, BLACK, 1);

      this.rect.moveTo(this.xStart, this.yStart);
      this.rect.lineTo(this.xStart+M, this.yStart);
    }
}