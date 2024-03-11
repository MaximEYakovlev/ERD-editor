export const exist = (list, name, index) => {
    const array = Object.values(list[index]);

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            return array[i].some((item) => {
                return item.name === name;
            });
        }
    }
};
