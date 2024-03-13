import { setEntityHead } from './helpers/setEntityHead';
import { setEntityBody } from './helpers/setEntityBody';
import { setElementPosition } from './helpers/setElementPosition';

export const setEntities = (args) => {
    const {
        list,
        offset,
        setList,
        setOffset,
        coordinates,
        setCoordinates,
        associations,
        setAssociations,
        styles,
    } = args;

    const entities = list.map((entity, index) => {
        const head = setEntityHead({
            index,
            offset,
            setOffset,
            coordinates,
            setCoordinates,
            entity,
            styles,
        });
        const body = setEntityBody({
            index,
            list,
            setList,
            associations,
            setAssociations,
            entity,
            styles,
        });
        const position = setElementPosition(index, coordinates);

        return (
            <div key={index} style={position}>
                {head}
                {body}
            </div>
        );
    });

    return entities;
};
