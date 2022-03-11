class LazyMan {
	constructor (name) {
		this.name = name;
		this.queue = [];
		this.queue.push(() => {
			console.log(`this is ${ name }`);
			this.next();
		});

		setTimeout(() => {
			this.next();
		}, 0);
	}

	next = () => {
		const task = this.queue.shift();
		task && task();
	};

	sleep = (time) => {
		this.queue.push(() => {
			setTimeout(() => {
				console.log(`Wake up after ${ time }`);
				this.next();
			}, time);
		});
		return this;
	};

	sleepFirst = (time) => {
		this.queue.unshift(() => {
			setTimeout(() => {
				console.log(`Wake up after ${ time }`);
				this.next();
			}, time);
		});
		return this;
	};

	eat = (food) => {
		this.queue.push(() => {
			console.log(`Eat ${ food }`);
			this.next();
		});
		return this;
	};
}

const lazyMan = (name) => new LazyMan(name);

lazyMan("Hank").sleep(1000).eat("dinner");

// lazyMan("Hank").eat("dinner").eat("supper");

// lazyMan("Hank").eat("supper").sleepFirst(5000);
