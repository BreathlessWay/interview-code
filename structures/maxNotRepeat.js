const maxNotRepeat = (str) => {
	let max = 0,
		maxStr = "",
		start = 0,
		json = {};

	for (let i = 0; i < str.length; i++) {
		const item = str[i];

		if (json[item] !== undefined) {
			start = Math.max(start, json[item] + 1);
		}

		json[item] = i;

		if (max < i - start + 1) {
			max = i - start + 1;
			maxStr = str.slice(start, i + 1);
		}
	}

	console.log(max, maxStr);
};

maxNotRepeat("abcabcbb");
maxNotRepeat("bbbbb");
maxNotRepeat("pwwkew");
maxNotRepeat("a");
