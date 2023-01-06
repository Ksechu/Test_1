class Line_horizontal extends PIXI.Container {
    constructor(x_start, y_start) {
      super();

      this.x_start = x_start;
      this.y_start = y_start;
      this.tf = tf;

      this.rect = new PIXI.Graphics();

      this.draw();
      this.addChild(this.rect);
    }

    draw() {
        this.rect.lineStyle(5, BLACK, 1);

        this.rect.moveTo(this.x_start-M, this.y_start);
        this.rect.lineTo(this.x_start+M, this.y_start);
    }
}