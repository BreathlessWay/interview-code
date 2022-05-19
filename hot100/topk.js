const topk = (arr, k) => {
	let len = arr.length;

	const heapify = (i) => {
		let leftIndex = 2 * i + 1,
			rightIndex = 2 * i + 2,
			currentIndex = i;

		if (leftIndex < len && arr[leftIndex] > arr[currentIndex]) {
			currentIndex = leftIndex;
		}

		if (rightIndex < len && arr[rightIndex] > arr[currentIndex]) {
			currentIndex = rightIndex;
		}
		if (currentIndex !== i) {
			[arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]];
			heapify(currentIndex);
		}
	};

	const buildHeap = () => {
		for (let i = Math.floor(len / 2); i >= 0; i--) {
			heapify(i);
		}
	};

	buildHeap();
	// 堆排序
	// while (len > 1) {
	// 	len--;
	// 	[arr[0], arr[len]] = [arr[len], arr[0]];
	// 	heapify(0);
	// }

	for (let i = len - 1, l = len - k + 1; i >= l; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		len--;
		heapify(0);
	}
	console.log(arr);

	// top k
	console.log(arr[0]);

};

topk([3, 2, 1, 5, 6, 4]
	, 2);
