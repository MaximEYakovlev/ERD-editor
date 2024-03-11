import { setAttributes } from '../../utils/setAttributes';
import { setAssociations } from '../../utils/setAssociations';

export const Attribute = ({ entity, associate }) => {
    const attributes = setAttributes(entity);
    const associations = setAssociations(associate);

    return (
        <>
            {attributes}
            {associations}
        </>
    );
};
