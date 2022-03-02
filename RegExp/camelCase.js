const camelCase = /[-_\s]+(.)?/g;

console.log("foo-bar--".replace(camelCase, (match, char) => {
	console.log(match, char);
	return char ? char.toUpperCase() : "";
}));

