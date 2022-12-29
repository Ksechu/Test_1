class Grid extends PIXI.Container {
    constructor(n, m, x_start, y_start) {
      super();
      this.n = n;
      this.m = m;
      this.x_start = x_start;
      this.y_start = y_start;

      this.rect = new PIXI.Graphics();

      this.draw();
      this.addChild(this.rect);
    }

    draw() {
      
      /* while (((this.n * this.m) + this.m) >= (WIDTH - (this.n * this.m))) {
        this.m=this.m - 1;
      }*/

      let nm = this.n * this.m;

      this.rect.beginFill(GREY);
      this.rect.drawRect(this.x_start, this.y_start, nm, nm);
      this.rect.endFill();

      this.rect.lineStyle(1, BLUE, 0.5);

      for (let i = 0; i <= this.n; i++) {
        this.rect.moveTo(this.x_start + i * this.m, this.y_start);
        this.rect.lineTo(this.x_start + i * this.m, this.y_start + nm);
      }

      for (let j = 0; j <= this.n; j++) {
        this.rect.moveTo(this.x_start, this.y_start + j * this.m);
        this.rect.lineTo(this.x_start + nm, this.y_start + j * this.m);
      }   
      
    }
  }