const longestCommonPrefix = (array) => {
	let common = array[0];

	for (let i = 1; i < array.length; i++) {
		const item = array[i];
		let j = 1;
		while (j < common.length) {
			if (common.slice(0, j) === item.slice(0, j)) {
				j++;
			} else {
				common = common.slice(0, j - 1);
				break;
			}
		}
	}

	console.log(common);
};

const strs = ["flower", "flow", "flight"];

longestCommonPrefix(strs);

const a = ["dog","racecar","car"]

longestCommonPrefix(a);
