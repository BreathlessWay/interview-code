const maxNotRepeat = (str) => {
	let maxLen = 0,
		start = 0,
		res = "",
		map = new Map();

	for (let i = 0; i < str.length; i++) {
		const v = str[i];
		if (map.has(v)) {
			start = Math.max(start, map.get(v) + 1);
		}

		map.set(v, i);
		if (maxLen < i - start + 1) {
			maxLen = i - start + 1;
			res = str.slice(start, i + 1);
		}
	}
	console.log(maxLen, res);
};

maxNotRepeat("abcabcbb");
maxNotRepeat("bbbbb");
maxNotRepeat("pwwkew");
maxNotRepeat("a");
