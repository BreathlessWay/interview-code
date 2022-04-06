const maxRepeatChart = (str) => {
	const json = {};
	let maxChar = ["", 0];
	for (let i = 0; i < str.length; i++) {
		const v = str[i];
		json[v] = (json[v] || 0) + 1;
		if (json[v] > maxChar[1]) {
			maxChar = [v, json[v]];
		}
	}
	console.log(maxChar);
	return maxChar;
};

maxRepeatChart("aaabvgggafff");
