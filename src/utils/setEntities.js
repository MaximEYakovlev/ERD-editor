import { Attribute } from '../components/attribute/Attribute';
import { setElementPosition } from './helpers/setElementPosition';
import { handleDragStart, handleDrag } from './dndEntities';
import {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
} from './dndDropZone';

export const setEntities = ({
    list,
    offset,
    setList,
    setOffset,
    coordinates,
    setCoordinates,
    associations,
    setAssociations,
    styles,
}) => {
    const entities = list.map((entity, index) => {
        const { name } = entity;

        return (
            <div key={index} style={setElementPosition(index, coordinates)}>
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
                <div
                    className={styles.body}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={(e) =>
                        handleDrop({
                            e,
                            index,
                            list,
                            setList,
                            associations,
                            setAssociations,
                        })
                    }
                >
                    <Attribute entity={entity} associate={associations} />
                </div>
            </div>
        );
    });

    return entities;
};
