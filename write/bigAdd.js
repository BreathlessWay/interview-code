const bigAdd = (a, b) => {
	a = a.toString();
	b = b.toString();

	const len1 = a.length,
		len2 = b.length,
		maxLen = Math.max(len1, len2);

	a = a.padStart(maxLen, "0");
	b = b.padStart(maxLen, "0");

	let flag = 0,
		str = "";
	for (let i = maxLen - 1; i >= 0; i--) {
		const s1 = a[i],
			s2 = b[i];
		const v = parseInt(s1) + parseInt(s2) + flag;
		if (v > 10) {
			flag = Math.floor(v / 10);
		} else {
			flag = 0;
		}
		str = v % 10 + str;
	}

	if (flag) {
		str = flag + str;
	}
	console.log(str);
	return str;
};

bigAdd("99", "12");
