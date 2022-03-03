// a == 1 && a == 2 && a == 3

const a = {
	v: 1,
	toString () {
		return this.v++;
	}
};

console.log(a == 1 && a == 2 && a == 3);
