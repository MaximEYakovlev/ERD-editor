import * as CONSTANTS from '../../constants/constants';

export const addNewEntity = (args) => {
    const { list, setList, coordinates, setCoordinates } = args;

    const updatedList = [
        ...list,
        {
            name: CONSTANTS.NEW_ENTITY_NAME,
            attributes: [
                {
                    name: '',
                },
            ],
        },
    ];
    const updatedCoordinates = [
        ...coordinates,
        {
            x: 0,
            y: 0,
        },
    ];

    setList(updatedList);
    setCoordinates(updatedCoordinates);
};
