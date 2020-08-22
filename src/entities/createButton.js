import { Sprite } from 'kontra';


function createButton(image, x, y) {
    image.width = 140;
    image.height = 50;
    let sprite = Sprite({
        x,
        y,
        anchor: { x: 0.5, y: 0.5 },
        // required for an image sprite
        image
    });
    return sprite;
}

export {
    createButton
}