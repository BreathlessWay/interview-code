class Scheduler {
	constructor(limit) {
		this.limit = limit;
		this.count = 0;
		this.queue = [];
		this.result = [];
	}

	add = (promise) => {
		this.queue.push(promise);
	};

	splitQueue = () => {
		const len = this.queue.length, res = [];
		for (let i = 0; i < len; i += this.limit) {
			res.push(this.queue.slice(i, i + this.limit));
		}
		return res;
	};

	request = () => {
		const sq = this.splitQueue(),
			len = sq.length,
			current = sq[this.count];

		return Promise.all(current).then(res => {
			this.result = this.result.concat(res);
			if (this.count === len - 1) {
				return this.result;
			} else {
				this.count++;
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
