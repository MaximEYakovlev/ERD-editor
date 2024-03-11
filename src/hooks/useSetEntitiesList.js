import { useEffect } from 'react';
import { objectToArray } from '../utils/objectToArray';

export const useSetEntitiesList = (setList, setCoordinates) => {
    useEffect(() => {
        const [resultArray, initialCoordinates] = objectToArray();

        setList(resultArray);
        setCoordinates(initialCoordinates);
    }, []);
};
