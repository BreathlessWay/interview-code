class LRUCache {
	constructor (limit) {
		this.limit = limit;
		this.map = new Map();
	}

	put = (key, value) => {
		if (this.map.has(key)) {
			this.map.delete(key);
			this.map.set(key, value);
		} else {
			this.map.set(key, value);
			if (this.map.size > this.limit) {
				this.map.delete(this.map.keys().next().value);
			}
		}
	};

	get = (key) => {
		if (this.map.has(key)) {
			const v = this.map.get(key);
			this.map.delete(key);
			this.map.set(key, v);
			return v;
		}

		return -1;
	};
}

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4

console.log(lRUCache);
