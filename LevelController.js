class LevelController {
    constructor(arrayLevel, stage) {

      this.arrayLevel = arrayLevel;
      this.stage = stage;
      this.n = 0;
      this.arrayLink = [];
      this.countLink = 0;

    }

    loadLevel() {
        const grid = new Grid(100, 100, 7, CELL_SIZE);

        this.arrayLink[this.countLink++] = this.stage.addChild(grid);
      
        const grid2 = new Grid(500, 100, 7, CELL_SIZE);
      
        this.arrayLink[this.countLink++] = this.stage.addChild(grid2);        

        this.arrayLevel[this.n].forEach((levelElement) => {

            const x = grid2.x + levelElement.i * CELL_SIZE;
            const y = grid2.y + levelElement.j * CELL_SIZE;
        
            const element = ELEMENTS_FACTORY[levelElement.type](x, y, false);
        
            this.arrayLink[this.countLink++] = this.stage.addChild(element);
        });
    }

    next() {
        this.n++;
        if (this.n < this.arrayLevel.length)
            return true; 
        else {
            return false;
            console.log('Levels over');
        }   
    }

    clearLevel(){
        this.arrayLink.forEach((linkElement) => {
            this.stage.removeChild(linkElement);
        });
        this.countLink = 0;
    }
}