// 中心扩散法
const longestPalindrome = (str) => {
	if (!str) {
		return "";
	}

	let left = 0, right = 0, maxStart = 0, maxLen = 0, len = 1, strLen = str.length;

	for (let i = 0; i < strLen; i++) {
		left = i - 1;
		right = i + 1;
		const item = str[i];
		while (left >= 0 && str[left] === item) {
			len++;
			left--;
		}
		while (right < strLen && str[right] === item) {
			len++;
			right++;
		}
		while (left >= 0 && right < strLen && str[left] === str[right]) {
			len += 2;
			left--;
			right++;
		}
		if (maxLen < len) {
			maxLen = len;
			maxStart = left;
		}
	}

	return str.slice(maxStart + 1, maxStart + maxLen + 1);
};

console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("ccc"));
