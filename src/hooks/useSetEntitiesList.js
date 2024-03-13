import { useEffect } from 'react';
import { objectToArray } from '../utils/objectToArray';

export const useSetEntitiesList = (data, setList, setCoordinates) => {
    useEffect(() => {
        const [list, coordinates] = objectToArray(data);

        setList(list);
        setCoordinates(coordinates);
    }, []);
};
