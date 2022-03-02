const capitalize = /(^|\s+)\w/g;

console.log("hello world".toLowerCase().replace(capitalize, (match, ...arg) => {
	console.log(match, arg);
	return match.toUpperCase();
}));

