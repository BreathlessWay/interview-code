class LazyMan {
	constructor(name) {
		this.name = name;
		this.queue = [];

		this.queue.push(() => {
			console.log(`I am ${this.name}`);
			this.next();
		});

		setTimeout(() => {
			this.next();
		}, 0);
	}

	next = () => {
		const fn = this.queue.shift();
		fn && fn();
	};

	eat = (food) => {
		this.queue.push(() => {
			console.log(food);
			this.next();
		});
		return this;
	};

	sleep = (time) => {
		this.queue.push(() => {
			setTimeout(() => {
				console.log(`sleep ${time}`);
				this.next();
			}, time);
		});
		return this;
	};

	sleepFirst = (time) => {
		this.queue.unshift(() => {
			setTimeout(() => {
				console.log(`sleep ${time}`);
				this.next();
			}, time);
		});
		return this;
	};
}

const lazyMan = (name) => new LazyMan(name);

// lazyMan("Hank").sleep(1000).eat("dinner");

// lazyMan("Hank").eat("dinner").eat("supper");

lazyMan("Hank").eat("supper").sleepFirst(5000);
