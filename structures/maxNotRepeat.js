const maxNotRepeat = (str) => {
	let len = str.length,
		maxLen = 0,
		start = 0,
		res = "",
		map = new Map();

	for (let i = 0; i < len; i++) {
		const item = str[i];
		if (map.has(item)) {
			start = Math.max(start, map.get(item) + 1);
		}

		map.set(item, i);
		if (i - start + 1 > maxLen) {
			maxLen = i - start + 1;
			res = str.slice(start, i + 1);
		}
	}

	console.log(maxLen, res);
};

maxNotRepeat("abcabcbb");
maxNotRepeat("bbbbb");
maxNotRepeat("pwwkew");
maxNotRepeat("");
