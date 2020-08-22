import { Text } from 'kontra';

function createText(content, position, color, font, allignment = 'center', anchor = { x: 0, y: 0 }) {
    let text = Text({
        text: content,
        font: font,
        color: color,
        x: position.x,
        y: position.y,
        anchor: anchor,
        textAlign: allignment
    });

    return text;
}

export {
    createText
}