const hanota = (A, B, C) => {
	const len = A.length;

	const cb = (m, A, B, C) => {
		if (m === 1) {
			C.push(A.pop());
			return;
		}

		cb(m - 1, A, C, B);
		cb(1, A, B, C);
		cb(m - 1, B, A, C);
	};

	cb(len, A, B, C);
};

const a = [1, 2, 3, 4], b = [], c = [];

hanota(a, b, c);

console.log(a, b, c);
