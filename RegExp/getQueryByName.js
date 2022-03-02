const getQueryByName = (name) => {
	const reg = new RegExp(`[^|&]${name}=([^&]*)[&|$]`); // [^&]不包含 &

	const result = "?ie=UTF-8&wd=正则".match(reg);
	console.log(result);
	return result[1];
};

console.log(getQueryByName("ie"));

