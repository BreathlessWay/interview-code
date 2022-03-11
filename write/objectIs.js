const objectIs = (x, y) => {

	if (x === y) {
		return x !== 0 || 1 / x === 1 / y; // +0 !== -0
	}

	// NaN === NaN
	return x !== x && y !== y;
};
