import Xarrow from 'react-xarrows';

export const setAssociations = (associate) => {
    const associations = associate.map((association) => {
        const { start, end } = association;

        return <Xarrow start={start} end={end} />;
    });
    return associations;
};
