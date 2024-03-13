import { handleDragStart, handleDrag } from '../dndEntities';

export const setEntityHead = (args) => {
    const {
        index,
        offset,
        setOffset,
        coordinates,
        setCoordinates,
        entity,
        styles,
    } = args;
    const { name } = entity;

    return (
        <div
            className={styles.head}
            draggable={true}
            onDragStart={(e) => handleDragStart({ e, setOffset })}
            onDrag={(e) =>
                handleDrag({
                    e,
                    index,
                    offset,
                    coordinates,
                    setCoordinates,
                })
            }
        >
            {name}
        </div>
    );
};
