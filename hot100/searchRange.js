const binarySearch = (nums, target, lower) => {
	let left = 0, right = nums.length - 1, res = nums.length;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] > target || (lower && nums[mid] === target)) {
			right = mid - 1;
			res = mid;
		} else {
			left = mid + 1;
		}
	}
	return res;
};

const searchRange = (nums, target) => {
	const leftIndex = binarySearch(nums, target, true),
		rightIndex = binarySearch(nums, target, false) - 1;

	if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
		return [leftIndex, rightIndex];
	}
	return [-1, -1];
};

console.log(searchRange([1], 1));
