// 中心扩散法
const longestPalindrome = (s) => {
	let start = 0,
		maxLen = 0,
		left = 0,
		right = 0,
		len = s.length;

	for (let i = 0; i < len; i++) {
		left = i - 1;
		right = i + 1;
		const item = s[i];
		let max = 0;

		while (left >= 0 && s[left] === item) {
			left--;
			max++;
		}

		while (right < len && s[right] === item) {
			right++;
			max++;
		}

		while (left >= 0 && right < len && s[left] === s[right]) {
			left--;
			right++;
			max += 2;
		}

		if (max > maxLen) {
			start = left + 1;
			maxLen = max;
		}
	}

	return s.slice(start, start + maxLen + 1);
};

console.log(longestPalindrome("cbbd"));
