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

	splitToQueue = () => {
		const result = [],
			len = this.queue.length;

		for (let i = 0; i < len; i += this.limit) {
			result.push(this.queue.slice(i, i + this.limit));
		}

		return result;
	};

	request = () => {
		const list = this.splitToQueue(),
			listLen = list.length;

		return Promise.all(list[this.count]).then(res => {
			this.result = this.result.concat(res);
			this.count++;
			if (this.count < listLen) {
				console.log(this.count);
				return this.request();
			} else {
				return this.result;
			}
		});
	};
}

const requestControl = new Scheduler(4);

for (let i = 0; i < 20; i++) {
	requestControl.add(Promise.resolve(i));
}

requestControl.request().then(res => console.log(res));
