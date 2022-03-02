const collectRepeatStr = /(.+)\1+/g;

const repeatArray = [];
console.log("12323454545666".replace(collectRepeatStr, (m, c) => {
	repeatArray.push(c);
	return m;
}));

console.log(repeatArray);

