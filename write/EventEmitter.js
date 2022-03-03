class EventEmitter {
	constructor () {
		this.listener = {};
	}

	on = (key, fun) => {
		const listenerList = this.listener[key];

		if (!listenerList) {
			this.listener[key] = [];
		}

		this.listener[key].push(fun);
	};

	once = (key, fun) => {
		const fu = (...args) => {
			fun.apply(this, args);
			this.off(key, fu);
		};

		this.on(key, fu);
	};

	off = (key, fun) => {
		if (typeof fun === "function") {
			const listenerList = this.listener[key];
			if (listenerList && listenerList.length) {
				const filter = listenerList.filter(_ => _ !== fun);
				if (filter && filter.length) {
					this.listener[key] = filter;
				} else {
					delete this.listener[key];
				}
			}
		} else {
			delete this.listener[key];
		}
	};

	emit = (key, ...args) => {
		const listenerList = this.listener[key];

		if (listenerList && listenerList.length) {
			listenerList.forEach(fun => {
				fun.apply(this, args);
			});
		}
	};
}

const e = new EventEmitter();

e.on("a", () => {
	console.log(111);
});
e.on("a", () => {
	console.log(222);
});
e.on("a", () => {
	console.log(113331);
});
e.on("a", () => {
	console.log(444);
});

e.on("b", () => {
	console.log("bbb");
});

e.on("c", () => {
	console.log("ccc");
	console.log(this);
});

e.once("d", (mm, nn, ll) => {
	console.log(mm + "ddd" + nn + ll);
});

e.emit("a");
e.emit("b");
e.emit("c");
e.emit("d", "qq", "pp", "oo");

e.emit("d");

e.off("a");

e.emit("a");
