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
      this.count = 0;

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
        this.count = this.arrayLevel[this.n].length;       

        this.arrayLevel[this.n].forEach((levelElement) => {

            const x = this.sampleGrid.x + levelElement.i * CELL_SIZE;
            const y = this.sampleGrid.y + levelElement.j * CELL_SIZE;
        
            const element = ELEMENTS_FACTORY[levelElement.type](x, y, false);
        
            const interactiveElement = ELEMENTS_FACTORY[levelElement.type]((levelElement.type * 2 * CELL_SIZE) + this.sampleGrid.gridSize, 550, true);

            this.stage.addChild(element);
            this.elements.push(element);
            this.elements.push(interactiveElement);
        

        interactiveElement.on('pointerdown', () => {
            this.dragFn = (event) => {
              const pos = this.stage.toLocal(event.global);
              interactiveElement.position.set(pos.x, pos.y);
            }
      
            this.stage.on('pointermove', this.dragFn);
          });
      
          interactiveElement.on('pointerup', () => {
            
          this.arrayLevel[this.n].some((levelElement) => {

                const x = this.workGrid.x + levelElement.i * this.workGrid.cellSize;
                const y = this.workGrid.y + levelElement.j * this.workGrid.cellSize;
            
                if (((interactiveElement.x >= (x - (this.workGrid.cellSize / 2))) && (interactiveElement.x <= (x + (this.workGrid.cellSize / 2))))
                 && ((interactiveElement.y >= (y - (this.workGrid.cellSize / 2))) && (interactiveElement.y <= (y + (this.workGrid.cellSize / 2))))
                 && (interactiveElement.type == levelElement.type)) {
                  interactiveElement.position.set(x, y);
                  interactiveElement.interactive = false;
                  this.count--;
                  return true;                              
                }            
            });            
            
            if (interactiveElement.interactive){
              interactiveElement.position.set((levelElement.type * 2 * CELL_SIZE) + this.sampleGrid.gridSize, 550);
            }

            if (this.count == 0) {
              this.next();
            }
          });
    
          interactiveElement.on('pointerupoutside', () => {
            
            this.arrayLevel[this.n].some((levelElement) => {

              const x = this.workGrid.x + levelElement.i * this.workGrid.cellSize;
              const y = this.workGrid.y + levelElement.j * this.workGrid.cellSize;
          
              if (((interactiveElement.x >= (x - (this.workGrid.cellSize / 2))) && (interactiveElement.x <= (x + (this.workGrid.cellSize / 2))))
               && ((interactiveElement.y >= (y - (this.workGrid.cellSize / 2))) && (interactiveElement.y <= (y + (this.workGrid.cellSize / 2))))
               && (interactiveElement.type == levelElement.type)) {
                interactiveElement.position.set(x, y);
                interactiveElement.interactive = false;
                this.count--;
                return true;                              
              }            
          });            
          
          if (interactiveElement.interactive){
            interactiveElement.position.set((levelElement.type * 2 * CELL_SIZE) + this.sampleGrid.gridSize, 550);
          }

          if (this.count == 0) {
            this.next();
          }
          });

        this.stage.addChild(interactiveElement);

      });
    }

    next() {
        this.n++;
        if (this.n < this.arrayLevel.length){
            console.log('Next level');
            this.loadLevel();
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