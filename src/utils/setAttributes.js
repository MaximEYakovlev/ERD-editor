import { handleDragStart } from './dndAttributes';

export const setAttributes = (entity) => {
    const attributes = entity.attributes.map((attribute) => {
        const { id, name } = attribute;

        return (
            <div
                key={id}
                id={id}
                draggable={true}
                onDragStart={(e) => handleDragStart(e, attribute)}
            >
                {name}
            </div>
        );
    });

    return attributes;
};
