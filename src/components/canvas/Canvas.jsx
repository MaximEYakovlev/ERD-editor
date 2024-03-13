import { useState } from 'react';
import { useSetEntitiesList } from '../../hooks/useSetEntitiesList';
import { Entity } from '../entity/Entity';
import { Button } from '../sharedComponents/button/Button';
import { handleClick } from '../../utils/handleClick';
import data from '../../data/erd.json';
import styles from './canvas.module.css';
import * as CONSTANTS from '../../constants/constants';

export const Canvas = () => {
    const [list, setList] = useState([]);
    const [offset, setOffset] = useState({});
    const [coordinates, setCoordinates] = useState([]);
    const [associations, setAssociations] = useState([]);

    useSetEntitiesList(data, setList, setCoordinates);

    return (
        <>
            <Button
                styles={styles.button}
                onClick={() =>
                    handleClick({
                        list,
                        setList,
                        coordinates,
                        setCoordinates,
                    })
                }
            >
                {CONSTANTS.BUTTON_NAME}
            </Button>
            <Entity
                list={list}
                offset={offset}
                setList={setList}
                setOffset={setOffset}
                coordinates={coordinates}
                setCoordinates={setCoordinates}
                associations={associations}
                setAssociations={setAssociations}
            />
        </>
    );
};
