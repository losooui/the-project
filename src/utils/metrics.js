const makeCircle = size => ({
    height: size,
    width: size,
    borderRadius: size/2,
});

const makeRounedRec = (size, radius) => ({
    height: size,
    width: size,
    borderRadius: radius,
});

export { makeCircle, makeRounedRec };