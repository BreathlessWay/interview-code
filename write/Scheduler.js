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
		const sq = this.splitQueue(), len = sq.length, current = sq[this.count];

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

	mm = () => new Promise(resolve => {
		const len = this.queue.length;
		let result = [], count = 0;

		const cb = () => {
			const index = len - this.queue.length, current = this.queue.splice(0, 1)[0];
			current.then(res => {
				result[index] = res;
				count++;
				if (count === len) {
					resolve(result);
					return;
				}
				if (this.queue.length) {
					cb();
				}
			});
		};

		for (let i = 0; i < this.limit; i++) {
			cb();
		}
	});
}

const requestControl = new Scheduler(4);

for (let i = 0; i < 20; i++) {
	requestControl.add(Promise.resolve(i));
}

requestControl.mm().then(res => console.log(res));
