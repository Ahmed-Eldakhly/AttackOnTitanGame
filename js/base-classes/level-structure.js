var idCounter = 0;
class LevelStructure {
    id = 0;
    constructor(images, width, height, positionX, positionY) {
        this.images = images;
        this.width = width;
        this.height = height;
        this.id = ++idCounter;
        this.positionX = positionX;
        this.positionY = positionY;
        this.forward = 0;
    }

}
