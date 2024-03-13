import { useEffect } from 'react';
import { objectToArray } from '../utils/objectToArray';

export const useSetEntitiesList = (data, setList, setCoordinates) => {
    useEffect(() => {
        const [resultArray, initialCoordinates] = objectToArray(data);

        setList(resultArray);
        setCoordinates(initialCoordinates);
    }, []);
};
