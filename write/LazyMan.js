class LazyMan {
	constructor(name) {
		this.name = name;
		this.task = [];
		this.task.push(() => {
			console.log(` my name is ${name}`);
			this.next();
		});

		setTimeout(this.next, 0);
	}

	next = () => {
		const fn = this.task.shift();
		if (typeof fn === "function") {
			fn();
		}
	};

	sleep = (ms) => {
		this.task.push(() => {
			setTimeout(() => {
				console.log(` sleep ${ms}`);
				this.next();
			}, ms);
		});
		return this;
	};

	eat = (food) => {
		this.task.push(() => {
			console.log(` eat ${food}`);
			this.next();
		});
		return this;
	};

	sleepFirst = (ms) => {
		this.task.unshift(() => {
			setTimeout(() => {
				console.log(` sleep ${ms}`);
				this.next();
			}, ms);
		});
		return this;
	};
}

const lazyMan = (name) => new LazyMan(name);

// lazyMan("Hank").sleep(1000).eat("dinner");

lazyMan("Hank").eat("dinner").eat("supper");

// lazyMan("Hank").eat("supper").sleepFirst(5000);
