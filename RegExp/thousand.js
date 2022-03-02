const thousandInt = /(?!^)(?=(\d{3})+$)/g;

console.log("123456789".replace(thousandInt, ","));

