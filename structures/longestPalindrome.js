// 中心扩散法
const longestPalindrome = (str) => {
	let res = "", s = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			s = str[i] + str[i + 1];
			let pre = i - 1,
				next = i + 2;

			while (str[pre] && str[next] && str[pre] === str[next]) {
				s = str[pre] + s + str[next];
				pre--;
				next++;
			}
		} else {
			let pre = i - 1,
				next = i + 1;
			s = str[i];
			while (str[pre] && str[next] && str[pre] === str[next]) {
				s = str[pre] + s + str[next];
				pre--;
				next++;
			}
		}

		s.length > res.length ? res = s : "";
	}
	console.log(res);
};

longestPalindrome("babad");
longestPalindrome("cbbd");
