import * as CONSTANTS from '../../constants/constants';

export const setCoordinates = (args) => {
    const { e, index, offset, coordinates, setCoordinates } = args;

    const x = e.clientX - offset.x;
    const y = e.clientY - offset.y;

    const coordinatesToUpdate = [...coordinates];
    coordinatesToUpdate[index] = { x, y };

    if (x >= CONSTANTS.OFFSET && y >= CONSTANTS.OFFSET)
        setCoordinates(coordinatesToUpdate);
};
