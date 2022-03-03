class LRUCache {
	constructor (capacity) {
		this.capacity = capacity;
		this.map = new Map();
	}

	get (key) {
		const has = this.map.has(key);
		if (has) {
			const v = this.map.get(key);

			this.map.delete(key);
			this.map.set(key, v);
			return v;
		}
		return -1;
	}

	put (key, value) {
		const has = this.map.has(key);
		if (has) {
			this.map.delete(key);
			this.map.set(key, value);
		} else {
			this.map.set(key, value);
			const len = this.map.size;
			if (len > this.capacity) {
				// 获取头部的神奇处理 keys().next()
				this.map.delete(this.map.keys().next().value);
			}
		}
	}

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

