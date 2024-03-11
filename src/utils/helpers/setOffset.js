export const setOffset = ({ e, setOffset }) => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    setOffset({ x, y });
};
