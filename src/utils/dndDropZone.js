import { setList } from './helpers/setList';
import * as CONSTANTS from '../constants/constants';

export const handleDragEnter = (e) => {
    e.target.style.border = CONSTANTS.BORDER;
};

export const handleDragLeave = (e) => {
    e.target.style.border = '';
};

export const handleDragOver = (e) => {
    e.preventDefault();
};

export const handleDrop = (args) => {
    const { e } = args;

    e.target.style.border = '';
    setList(args);
};
