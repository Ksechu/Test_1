const GREEN = 0x00FF00;
const WHITE = 0xFFFFFF;
const BLUE  = 0x0000FF;
const GREY  = 0xFFF8DC;
const BLACK = 0x000000;
const CELL_SIZE = 50, WIDTH = 1024, HEIGHT = 720;

const ELEMENTS_FACTORY = [
    (x, y, interactive) => new HorizontalLine(x, y, interactive),
    (x, y, interactive) => new VerticalLine(x, y, interactive),
    (x, y, interactive) => new Circle(x, y, interactive),
  ];

class LevelController {
    constructor(arrayLevel, stage) {

      this.arrayLevel = arrayLevel;
      this.stage = stage;
      this.n = 0;
      this.elements = [];

      this.dragFn = () => {};

      this.workGrid = new Grid(100, 100, 7, CELL_SIZE);
      this.sampleGrid = new Grid(500, 100, 7, CELL_SIZE);

      this.stage.addChild(this.workGrid, this.sampleGrid);

      this.stage.on('pointerup', () => {
        this.stage.off('pointermove', this.dragFn);
      });

      this.stage.on('pointerupoutside', () => {
        this.stage.off('pointermove', this.dragFn);
      });
    }

    loadLevel() { 
        this.clearLevel();       

        this.arrayLevel[this.n].forEach((levelElement) => {

            const x = this.sampleGrid.x + levelElement.i * CELL_SIZE;
            const y = this.sampleGrid.y + levelElement.j * CELL_SIZE;
        
            const element = ELEMENTS_FACTORY[levelElement.type](x, y, false);
        
            this.stage.addChild(element);
            this.elements.push(element);
        });

        const element = ELEMENTS_FACTORY[2](400,550,true);

        element.on('pointerdown', () => {
            this.dragFn = (event) => {
              const pos = this.stage.toLocal(event.global);
              element.position.set(pos.x, pos.y);
            }
      
            this.stage.on('pointermove', this.dragFn);
          });
      
        element.on('pointerup', () => {
            let sX = 400, sY = 550;
            
            this.arrayLevel[this.n].forEach((levelElement) => {

                const x = this.workGrid.x + levelElement.i * CELL_SIZE;
                const y = this.workGrid.y + levelElement.j * CELL_SIZE;
            
                if (((element.x >= (x - (CELL_SIZE / 2))) && (element.x <= (x + (CELL_SIZE / 2))))
                 && ((element.y >= (y - (CELL_SIZE / 2))) && (element.y <= (y + (CELL_SIZE / 2))))) {    
                    sX = x;
                    sY = y;                                  
                }                
            });
            
            element.position.set(sX, sY);            
            
          });
    
        element.on('pointerupoutside', () => {
            console.log('up');
          });

        this.stage.addChild(element);
    }

    next() {
        this.n++;
        if (this.n < this.arrayLevel.length){
            return true; 
        }            
        else {            
            console.log('Levels over');
            return false;
        }   
    }

    clearLevel(){
        this.elements.forEach((element) => {
            this.stage.removeChild(element);
        });
    }
}