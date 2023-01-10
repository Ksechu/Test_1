class Grid extends PIXI.Container {
    constructor(n, m, topLeftX, topLeftY) {
      super();
      this.n = n;
      this.m = m;
      this.topLeftX = topLeftX
      this.topLeftY = topLeftY;

      this.rect = new PIXI.Graphics();

      this.draw();
      this.addChild(this.rect);
    }

    draw() {
      
      let nm = this.n * this.m;

      this.rect.beginFill(GREY);
      this.rect.drawRect(this.topLeftX, this.topLeftY, nm, nm);
      this.rect.endFill();

      this.rect.lineStyle(1, BLUE, 0.5);

      for (let i = 0; i <= this.n; i++) {
        this.rect.moveTo(this.topLeftX + i * this.m, this.topLeftY);
        this.rect.lineTo(this.topLeftX + i * this.m, this.topLeftY + nm);
      }

      for (let j = 0; j <= this.n; j++) {
        this.rect.moveTo(this.topLeftX, this.topLeftY + j * this.m);
        this.rect.lineTo(this.topLeftX + nm, this.topLeftY + j * this.m);
      }   
      
    }
  }