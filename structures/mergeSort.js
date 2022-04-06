const merge = (left, right) => {
	let res = [], i = 0, j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			res.push(left[i]);
			i++;
		} else {
			res.push(right[j]);
			j++;
		}
	}

	if (i < left.length) {
		res = res.concat(left.slice(i));
	} else {
		res = res.concat(right.slice(j));
	}

	return res;
};

const mergeSort = (arr) => {
	const len = arr.length;

	if (len < 2) {
		return arr[0];
	}

	const mid = Math.floor(len / 2),
		left = mergeSort(arr.slice(0, mid)),
		right = mergeSort(arr.slice(mid));

	return merge(left, right);
};

console.log(mergeSort([[1, 2, 4], [2, 3, 7], [3, 5, 7], [4, 5, 8]]));
