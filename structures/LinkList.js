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

	remove = () => {
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

console.log(linklist.indexOf(3));
