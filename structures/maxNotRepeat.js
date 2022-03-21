const maxNotRepeat = (str) => {
	let len = str.length,
		start = 0,
		maxLen = 0,
		map = new Map(),
		res = "";

	for (let i = 0; i < len; i++) {
		const item = str[i];

		if (map.has(item)) {
			start = Math.max(map.get(item) + 1, start);
		}
		map.set(item, i);
		if (i - start + 1 > maxLen) {
			maxLen = i - start + 1;
			res = str.slice(start, i + 1);
		}
	}
	console.log(maxLen, res);
	return maxLen;
};

maxNotRepeat("abcabcbb");
maxNotRepeat("bbbbb");
maxNotRepeat("pwwkew");
maxNotRepeat("");
