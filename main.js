const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const n=8, w=1024, h=720;

function boot() {
  const app = new PIXI.Application({
    width: w,
    height: h,
    backgroundAlpha: 1,
    background: WHITE,
  });
  
  document.body.appendChild(app.view);

  const square = new PIXI.Graphics();
  let m=50;



  class Setka
  {
      constructor(n,m)
      {
        this.n=n;
        this.m=m;
      }

      drawsetk(){
        
        while (((this.n*this.m)+this.m)>=(w-(this.n*this.m)))
        {
          this.m=this.m-1;
        }

        let nm = this.n*this.m;

        square.beginFill(GREY);
        square.drawRect(1, 0, nm+1, nm);
        square.endFill();

        square.lineStyle(1, BLUE, 0.5);

        for (let i=0;i<=this.n;i++)
        {
          square.moveTo(i*this.m+1, 0);
          square.lineTo(i*this.m+1, nm);
        }
        for (let j=0;j<=this.n;j++)
        {
          square.moveTo(1,  j*this.m);
          square.lineTo(nm+1, j*this.m);
        }   
        
        let x2 = w-nm;

        square.beginFill(GREY);
        square.drawRect(x2, 0, nm, nm);
        square.endFill();

        for (let i=0;i<=this.n;i++)
        {
          square.moveTo(x2+i*this.m, 0);
          square.lineTo(x2+i*this.m, nm);
        }
        for (let j=0;j<=this.n;j++)
        {
          square.moveTo(x2,    j*this.m);
          square.lineTo(x2+nm, j*this.m);
        }
      }
  }

  let S = new Setka(7,m);
  S.drawsetk();
  app.stage.addChild(square);
}

