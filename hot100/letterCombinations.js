const letterCombinations = (digits) => {
	const map = {
		"2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
	};

	if (!digits) return [];
	if (digits.length === 1) return map[digits].split("");

	let result = [], res = [];

	const backtracking = (index) => {
		if (digits.length === res.length) {
			result.push(res.join(""));
		} else {
			const s = digits[index],
				letter = map[s];
			for (let i = 0; i < letter.length; i++) {
				res.push(letter[i]);
				backtracking(index + 1);
				res.pop();
			}
		}
	};
	backtracking(0);
	console.log(result);
	return result;
};

letterCombinations("23");
