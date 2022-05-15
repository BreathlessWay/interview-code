const search = (nums, target) => {
	const len = nums.length;

	if (!len) return -1;

	if (len === 1) {
		return nums[0] === target ? 0 : -1;
	}

	let left = 0, right = len - 1;

	while (left <= right) {
		const mid = Math.floor((right + left) / 2),
			midVal = nums[mid];

		if (midVal === target) {
			return mid;
		}

		if (nums[left] <= midVal) {
			// 左边有序 右边无序
			if (target >= nums[left] && target < midVal) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			// 右边有序 左边无序
			if (target > midVal && target <= nums[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}

	return -1;
};

console.log(search([3, 1], 1));
