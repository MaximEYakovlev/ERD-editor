import { v4 as uuidv4 } from 'uuid';
import Xarrow from 'react-xarrows';

export const setAssociations = (associate) => {
    const associations = associate.map((association) => {
        const { start, end } = association;

        return <Xarrow key={uuidv4()} start={start} end={end} />;
    });
    return associations;
};
