const getKthElement = (arr1, arr2, k) => {
	let len1 = arr1.length,
		len2 = arr2.length,
		startIndex1 = 0,
		startIndex2 = 0;

	while (true) {
		if (startIndex1 === len1) {
			return arr2[startIndex2 + k - 1];
		}

		if (startIndex2 === len2) {
			return arr1[startIndex1 + k - 1];
		}

		if (k === 1) {
			return Math.min(arr1[startIndex1], arr2[startIndex2]);
		}

		const mid = Math.floor(k / 2),
			arrMidIndex1 = Math.min(startIndex1 + mid, len1) - 1,
			arrMidIndex2 = Math.min(startIndex2 + mid, len2) - 1,
			mid1 = arr1[arrMidIndex1],
			mid2 = arr2[arrMidIndex2];

		if (mid1 <= mid2) {
			k = k - (arrMidIndex1 - startIndex1 + 1);
			startIndex1 = arrMidIndex1 + 1;
		} else {
			k = k - (arrMidIndex2 - startIndex2 + 1);
			startIndex2 = arrMidIndex2 + 1;
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
