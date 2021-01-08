var idCounter = 0;
class LevelStructure {
    id = 0;
    constructor(images, width, height, positionx, positiony) {
        this.images = images;
        this.width = width;
        this.height = height;
        this.id = ++idCounter;
        this.positionx = positionx;
        this.positiony = positiony;
        this.forward = 0;
    }

}
