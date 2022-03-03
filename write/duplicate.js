const duplicate = (arr) => {
	// return [...new Set(arr)];
	const map = new Map(),
		newArr = [];

	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (!map.has(item)) {
			map.set(item, i);
			newArr.push(item);
		}
	}
	return newArr;
};
