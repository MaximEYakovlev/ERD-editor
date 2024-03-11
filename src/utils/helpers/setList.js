import { v4 as uuidv4 } from 'uuid';
import { exist } from './exist';
import * as CONSTANTS from '../../constants/constants';

export const setList = ({
    e,
    index,
    list,
    setList,
    associations,
    setAssociations,
}) => {
    try {
        const data = e.dataTransfer.getData(CONSTANTS.CONTENT_TYPE);
        const {
            attribute: { name, type },
            start,
        } = JSON.parse(data);

        const id = uuidv4();
        const associationsToUpdate = [...associations];
        associationsToUpdate.push({ start, end: id });

        const listToUpdate = [...list];
        const nameExists = exist(listToUpdate, name, index);

        if (!nameExists) {
            listToUpdate[index].attributes.unshift({
                id,
                name,
                type,
            });

            setList(listToUpdate);
            setAssociations(associationsToUpdate);
        } else {
            return;
        }
    } catch (error) {
        console.error(error);
    }
};
