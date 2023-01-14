class LevelController {
    constructor(arrayLevel) {

      this.arrayLevel = arrayLevel;
      this.n = 0;

    }

    currentLevel() {
        return this.arrayLevel[this.n];
    }

    nextLevel() {
        this.n++;
        if (this.n < this.arrayLevel.length)
            return true; 
        else {
            return false;
            console.log('Levels over');
        }   
    }
}