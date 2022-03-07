class Scheduler {
	constructor (limit) {
		this.limit = limit;
		this.queue = [];
		this.count = 0;
		this.result = [];
	}

	add = (promise) => {
		this.queue.push(promise);
	};

	splitQueue = () => {
		let arr = [],
			len = this.queue.length;
		for (let i = 0; i < len; i += this.limit) {
			arr.push(this.queue.slice(i, i + this.limit));
		}
		return arr;
	};

	request = () => {
		const q = this.splitQueue(),
			len = q.length,
			current = q[this.count];

		return Promise.all(current).then(res => {
			this.count++;
			this.result = this.result.concat(res);
			if (this.count === len) {
				return this.result;
			} else {
				console.log(this.count, this.result);
				return this.request();
			}
		});
	};
}

const requestControl = new Scheduler(4);

for (let i = 0; i < 20; i++) {
	requestControl.add(Promise.resolve(i));
}

requestControl.request().then(res => console.log(res));
