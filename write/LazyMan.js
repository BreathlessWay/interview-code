class LazyMan {
	constructor (name) {
		this.name = name;
		this.task = [];
		const task = () => {
			console.log(`Hi! This is ${ name }`);
			this.next();
		};

		this.task.push(task);
		// 宏任务 启动 lazyMan
		setTimeout(() => {
			this.next();
		}, 0);
	}

	next = () => {
		const task = this.task.shift();
		task && task();
	};

	sleep = (ms) => {
		const task = () => {
			setTimeout(() => {
				console.log(`Wake up after ${ ms }`);
				this.next();
			}, ms);
		};
		this.task.push(task);
		return this;
	};

	sleepFirst = (ms) => {
		const task = () => {
			setTimeout(() => {
				console.log(`Wake up after ${ ms }`);
				this.next();
			}, ms);
		};
		this.task.unshift(task);
		return this;
	};

	eat = (food) => {
		this.task.push(() => {
			console.log(`Eat ${ food }`);
			this.next();
		});
		return this;
	};
}

const lazyMan = (name) => new LazyMan(name);

// lazyMan("Hank").sleep(1).eat("dinner");

// lazyMan("Hank").eat("dinner").eat("supper");

lazyMan("Hank").eat("supper").sleepFirst(5);
