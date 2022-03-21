class NodeItem {
	constructor(v) {
		this.value = v;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.head = null;
		this.count = 0;
	}

	add = (value) => {
		const node = new NodeItem(value);
		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	};

	removeAt = (index) => {
		if (index > this.count || index < 0) {
			return void 0;
		}

		let i = 0, current = this.head;

		if (index === 0) {
			this.head = current.next;
			this.count--;
			return current.value;
		}

		while (current) {
			if (index - 1 === i) {
				let mid = current;
				current.next = mid.next.next;
				this.count--;
				return mid.value;
			}
			i++;
			current = current.next;
		}

		return void 0;
	};

	remove = (value) => {
		const index = this.indexOf(value);
		return this.removeAt(index);
	};

	indexOf = (value) => {
		let current = this.head, index = 0;
		while (current) {
			if (current.value === value) {
				return index;
			}
			current = current.next;
			index++;
		}
		return -1;
	};

	reverse = () => {
		if (this.count) {
			let current = this.head,
				nextNode = null;

			while (current) {
				const mid = current.next;
				current.next = nextNode;
				nextNode = current;
				current = mid;
			}
			this.head = nextNode;
		}
		return null;
	};

	toString = () => {
		let current = this.head;

		while (current) {
			console.log(current.value);
			current = current.next;
		}
	};
}

const linklist = new LinkList();

linklist.add(1);
linklist.add(2);
linklist.add(3);

// linklist.toString();
// console.log(linklist.indexOf(1));
// linklist.toString();

linklist.reverse();
linklist.toString();
