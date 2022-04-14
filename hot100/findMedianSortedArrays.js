const getKthElement = (arr1, arr2, k) => {
	let len1 = arr1.length,
		len2 = arr2.length,
		index1 = 0,
		index2 = 0;

	while (true) {
		if (index1 === len1) {
			return arr2[index2 + k - 1];
		}
		if (index2 === len2) {
			return arr1[index1 + k - 1];
		}
		if (k === 1) {
			return Math.min(arr1[index1], arr2[index2]);
		}

		const half = Math.floor(k / 2),
			newIndex1 = Math.min(index1 + half, len1) - 1,
			newIndex2 = Math.min(index2 + half, len2) - 1,
			pivot1 = arr1[newIndex1],
			pivot2 = arr2[newIndex2];

		if (pivot1 <= pivot2) {
			k = k - (newIndex1 - index1 + 1);
			index1 = newIndex1 + 1;
		} else {
			k = k - (newIndex2 - index2 + 1);
			index2 = newIndex2 + 1;
		}
	}
};

const findMedianSortedArrays = (arr1, arr2) => {
	const len1 = arr1.length,
		len2 = arr2.length,
		totalLen = len1 + len2;

	if (totalLen % 2) {
		// 奇数
		const midIndex = Math.floor(totalLen / 2);
		return getKthElement(arr1, arr2, midIndex + 1);
	} else {
		// 偶数
		const midIndex1 = Math.floor(totalLen / 2) - 1,
			midIndex2 = Math.floor(totalLen / 2);
		return (getKthElement(arr1, arr2, midIndex1 + 1) + getKthElement(arr1, arr2, midIndex2 + 1)) / 2;
	}
};

const merge = (left, right) => {
	let len1 = left.length,
		len2 = right.length,
		i = 0,
		j = 0,
		result = [];

	while (i < len1 && j < len2) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	if (i < len1) {
		result = result.concat(left.slice(i));
	} else {
		result = result.concat(right.slice(j));
	}

	return result;
};

const mergeSort = (arr) => {
	if (arr.length < 2) {
		return arr[0];
	}

	const mid = Math.floor(arr.length / 2);

	const left = mergeSort(arr.slice(0, mid)),
		right = mergeSort(arr.slice(mid));

	return merge(left, right);
};
