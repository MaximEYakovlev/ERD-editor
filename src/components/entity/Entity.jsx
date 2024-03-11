import { setEntities } from '../../utils/setEntities';
import styles from './entity.module.css';

export const Entity = (props) => {
    const entities = setEntities({ ...props, styles });

    return <>{entities}</>;
};
