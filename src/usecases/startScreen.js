// Should have a BG
// A back story
// and a button named "start game"
// On clicking on the button the startGame function will be called

import { createText } from '../entities/createText';
import { createButton } from '../entities/createButton';
import { gameLoop } from '../entities/gameLoop';
import buttonImg from '../images/button.svg';

function startScreen() {
    const startScreenText = 'THIS IS DUMMY DATA FOR NOW. IDEALLY THE BACKSTORY FOR THE GAME SHOULD BE PASTED HERE!'
    const startButtonText = 'START GAME';
    const screenText = createText(startScreenText, { x: 0, y: 0 }, 'red', '16px Ubuntu');
    const buttonText = createText(startButtonText, { x: -50, y: -10 }, 'white', '16px Ubuntu');

    // the start button
    let image = new Image();
    image.src = buttonImg;
    let button = createButton(image, 300, 100);
    button.addChild(buttonText);

    // render the entities
    gameLoop([
        screenText,
        button
    ])

}

export {
    startScreen
}


