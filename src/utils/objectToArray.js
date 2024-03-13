import { v4 as uuidv4 } from 'uuid';

export const objectToArray = (object) => {
    const array = [];
    const initialCoordinates = [];

    for (const key in object) {
        const newObject = {
            name: key,
            attributes: [],
        };

        const nestedObject = object[key];

        for (const key in nestedObject) {
            newObject.attributes.push({
                id: uuidv4(),
                name: key,
                type: nestedObject[key],
            });
        }

        array.push(newObject);
        initialCoordinates.push({ x: 0, y: 0 });
    }

    return [array, initialCoordinates];
};
