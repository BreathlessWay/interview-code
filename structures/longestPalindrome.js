const longestPalindrome = (str) => {
	const len = str.length;
	let ss = "", s1 = "";
	for (let i = 0; i < len; i++) {
		if (str[i] === str[i + 1]) {
			s1 = str[i] + str[i + 1];
			let pre = i - 1,
				next = i + 2;
			while (str[pre] && str[next] && str[pre] === str[next]) {
				s1 = str[pre] + s1 + str[next];
				pre--;
				next++;
			}
		} else {
			let pre = i - 1,
				next = i + 1;
			s1 = str[i];

			while (str[pre] && str[next] && str[pre] === str[next]) {
				s1 = str[pre] + s1 + str[next];
				pre--;
				next++;
			}
		}
		ss.length < s1.length ? ss = s1 : ss;
	}
	console.log(ss);
	return ss;
};

longestPalindrome("babad");
longestPalindrome("cbbd");
