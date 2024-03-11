import { v4 as uuidv4 } from 'uuid';
import entities from '../data/erd.json';

export const objectToArray = () => {
    const resultArray = [];
    const initialCoordinates = [];

    for (const key in entities) {
        const object = {
            name: key,
            attributes: [],
        };

        const nestedObject = entities[key];

        for (const key in nestedObject) {
            object.attributes.push({
                id: uuidv4(),
                name: key,
                type: nestedObject[key],
            });
        }

        resultArray.push(object);
        initialCoordinates.push({ x: 0, y: 0 });
    }

    return [resultArray, initialCoordinates];
};
