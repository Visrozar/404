
import { GameLoop } from 'kontra';

function gameLoop(entities) {
    // create a game loop to show updates to the button
    let loop = GameLoop({
        render() {
            entities.forEach(entity => {
                entity.render();
            });
        }
    });

    // start the loop
    loop.start();
}

export {
    gameLoop
}