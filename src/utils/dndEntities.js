import { setOffset } from './helpers/setOffset';
import { setCoordinates } from './helpers/setCoordinates';

export const handleDragStart = (args) => {
    setOffset(args);
};

export const handleDrag = (args) => {
    setCoordinates(args);
};
