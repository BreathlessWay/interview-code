const versionSort = (arr) => {
	arr.sort((a, b) => {
		const arr1 = a.split("."),
			arr2 = b.split(".");

		let i = 0;
		while (true) {
			const s1 = arr1[i],
				s2 = arr2[i];

			i++;
			if (s1 === void 0 || s2 === void 0) {
				return arr1.length - arr2.length;
			}

			if (s1 === s2) continue;

			return s1 - s2;
		}
	});

	console.log(arr);
};

versionSort(["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"]);
