const nextPermutation = (arr) => {
	if (arr.length < 2) {
		return arr;
	}

	let i = arr.length - 2, j = arr.length - 1, k = arr.length - 1;

	// 找第一个相邻升序
	while (i >= 0 && arr[i] >= arr[j]) {
		i--;
		j--;
	}
	// 找第一个比i大的数
	if (i >= 0) {
		while (arr[i] >= arr[k]) {
			k--;
		}
		[arr[i], arr[k]] = [arr[k], arr[i]];
	}
	// 后面数升序排列
	for (let m = j; m < arr.length; m++) {
		for (let n = j; n < arr.length - 1; n++) {
			if (arr[n] > arr[n + 1]) {
				[arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
			}
		}
	}
};

const arr = [1, 5, 1];
nextPermutation(arr);
console.log({arr});
