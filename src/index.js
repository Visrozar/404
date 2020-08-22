import { init } from 'kontra';
import { startScreen } from './usecases/startScreen';

let { canvas } = init();
canvas.width = 800;
canvas.height = 800;
startScreen();