import { Attribute } from '../../components/attribute/Attribute';
import {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
} from '../dndDropZone';

export const setEntityBody = (args) => {
    const {
        index,
        list,
        setList,
        associations,
        setAssociations,
        entity,
        styles,
    } = args;

    return (
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
    );
};
