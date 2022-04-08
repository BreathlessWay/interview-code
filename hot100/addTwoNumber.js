function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val);
	this.next = (next === undefined ? null : next);
}

const addTwoNumbers = function (l1, l2) {
	let flag = 0, list, current;
	while (l1 !== undefined || l2 !== undefined) {
		let res = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
		flag = Math.floor(res / 10);
		res = res % 10;
		if (list) {
			list.next = new ListNode(res);
			list = list.next;
		} else {
			current = list = new ListNode(res);
		}
		if (l1) {
			l1 = l1.next;
		}
		if (l2) {
			l2 = l2.next;
		}
	}
	if (flag) {
		list.next = new ListNode(flag);
	}
	return current;
};
