function keymirror(obj) {
    return Object.keys(obj).reduce(
        (acc, key) => {
            acc[key] = key;
            return acc;
        },
        {},
    );
}

export default keymirror;
