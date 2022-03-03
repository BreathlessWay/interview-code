const ajax = {
	get (url, fn) {
		const xhr = new XMLHttpRequest();
		xhr.open("get", url);
		xhr.addEventListener("readystatechange", () => {
			if (xhr.readyState === 4) {
				fn(xhr.response);
			}
		});
		xhr.send();
	},
	post (url, data, fn) {
		const xhr = new XMLHttpRequest();
		xhr.open("post", url);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.addEventListener("readystatechange", () => {
			if (xhr.readyState === 4) {
				fn(xhr.response);
			}
		});
		xhr.send(data);
	}
};
