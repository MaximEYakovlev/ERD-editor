import * as CONSTANTS from '../constants/constants';

export const handleDragStart = (e, attribute) => {
    const {
        target: { id },
    } = e;

    e.dataTransfer.setData(
        CONSTANTS.CONTENT_TYPE,
        JSON.stringify({ attribute, start: id })
    );
};
