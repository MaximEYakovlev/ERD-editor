import * as CONSTANTS from '../../constants/constants';

export const setElementPosition = (index, coordinates) => {
    const position = {
        position: CONSTANTS.POSITION_ABSOLUTE,
        left: coordinates[index].x,
        top:
            coordinates[index].x > 0
                ? coordinates[index].y
                : coordinates[index].y + 180 * (index + 0.3),
    };

    return position;
};
