const twoSum = (arr, total) => {
	let left = 0,
		right = arr.length - 1;

	while (left < right) {
		const leftNum = arr[left],
			rightNum = arr[right],
			sum = leftNum + rightNum;

		if (sum === total) {
			return [leftNum, rightNum];
		}
		if (sum > total) {
			right--;
		} else {
			left++;
		}
	}

	return null;
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 105));
